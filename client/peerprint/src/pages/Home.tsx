import {
  Center,
  CircularProgress,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import Receipt from "../types";
import { v4 as uuidv4 } from "uuid";
import { Backdrop } from "../components/common/Backdrop";
import { useGetReceipts } from "../hooks/useGetReceipts";
import { Wrapper } from "../components/common/Wrapper";
import { Banner } from "../components/Banner/Banner";
import { ReceiptCard } from "../components/ReceiptCard/ReceiptCard";
import { AddReceiptMenu } from "../components/AddReceiptMenu/AddReceiptMenu";
import { Pagination } from "../components/common/Pagination";

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
        <Flex alignItems="center">
          <Heading fontSize="4rem" my="0.5em" color="purple.500">
            Receipts
          </Heading>
          <Spacer />
          <AddReceiptMenu />
        </Flex>
        {isLoading && (
          <Center>
            <CircularProgress p="1em" isIndeterminate color="purple.500" />
          </Center>
        )}
        {receipts && (
          <Pagination itemsPerPage={8}>
            {receipts.map((receipt: Receipt) => (
              <ReceiptCard key={uuidv4()} receipt={receipt} />
            ))}
          </Pagination>
        )}
      </Wrapper>
    </Backdrop>
  );
};
