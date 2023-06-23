import { Box, Card, Heading, Text, Image, Divider } from "@chakra-ui/react";
import Receipt from "../../types";
import styles from "./ReceiptCard.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/en";
import femaleAvatar from "../../assets/female-avatar.svg";

interface ReceiptCardProps {
  receipt: Receipt;
}

export const ReceiptCard: React.FC<ReceiptCardProps> = ({ receipt }) => {
  const formattedDate = dayjs(receipt.date).format("DD/MM/YYYY");

  return (
    <Card
      className={styles.card}
      color="gray.700"
      padding="2em"
      borderRadius="xl"
      my="2em"
    >
      <Box
        width="7em"
        alignSelf="center"
        mt="-5em"
        backgroundColor="white"
        borderRadius="full"
        border="5px solid white"
      >
        <Image src={femaleAvatar} />
      </Box>
      <Heading color="purple.500">{receipt.name}</Heading>
      <Divider />
      <Text mt="1em" color="gray.500">
        {formattedDate}
      </Text>
      <Text fontWeight="bold" fontSize="3xl" color="green.400">
        ${receipt.total}
      </Text>
    </Card>
  );
};
