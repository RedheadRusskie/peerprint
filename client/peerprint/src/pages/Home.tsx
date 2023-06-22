import { Box, Center } from "@chakra-ui/react";
import { Backdrop } from "../components/common/Backdrop";
import { useGetReceipts } from "../hooks/useGetReceipts";

export const Home: React.FC = () => {
  const { data: receipts, isLoading, error } = useGetReceipts();

  console.log("receipts ", receipts);
  if (error) console.log("error", error);
  console.log("loading:", isLoading);

  return (
    <Backdrop>
      <Center>
        <Box maxWidth="50em" my="3em"></Box>
      </Center>
    </Backdrop>
  );
};
