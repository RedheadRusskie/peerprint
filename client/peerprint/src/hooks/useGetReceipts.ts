import { useEffect, useState } from "react";
import Receipt from "../types";
import axios, { AxiosError } from "axios";

interface UseGetReceiptsResults {
  data: Receipt[] | undefined;
  isLoading: boolean;
  error: string | undefined;
}

export const useGetReceipts = (): UseGetReceiptsResults => {
  const [receipts, setReceipts] = useState<Receipt[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Receipt[]>(
          "http://localhost:80/getReceipts"
        );
        setReceipts(response.data);
      } catch (error) {
        const typesError = error as Error | AxiosError;
        setError(typesError.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data: receipts, isLoading, error };
};
