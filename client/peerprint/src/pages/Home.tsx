import { Center, CircularProgress, Heading } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Receipt from "../types";
import { v4 as uuidv4 } from "uuid";
import { Backdrop } from "../components/common/Backdrop";
import { useGetReceipts } from "../hooks/useGetReceipts";
import { Wrapper } from "../components/common/Wrapper";
import { Banner } from "../components/Banner/Banner";
import { ReceiptCard } from "../components/ReceiptCard/ReceiptCard";

export const Home: React.FC = () => {
  const { data: receipts, isLoading, error } = useGetReceipts();
  const toast = useToast();

  if (error)
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });

  return (
    <Backdrop>
      <Wrapper>
        <Banner />
        <Heading ml="1em" fontSize="4rem" my="0.5em" color="purple.500">
          Receipts
        </Heading>
        {isLoading && (
          <Center>
            <CircularProgress p="1em" isIndeterminate color="purple.500" />
          </Center>
        )}
        {/* {receipts &&
          receipts.map((receipt: Receipt) => {
            return <ReceiptCard key={uuidv4()} receipt={receipt} />;
          })} */}
      </Wrapper>
    </Backdrop>
  );
};
