import { Card, Center } from "@chakra-ui/react";
import Receipt from "../../types";

interface ReceiptCardProps {
  receipt: Receipt;
}

export const ReceiptCard: React.FC<ReceiptCardProps> = ({ receipt }) => {
  return (
    <Card
      color="gray.700"
      padding="1em"
      borderRadius="xl"
      dropShadow="2xl"
    ></Card>
  );
};
