import {
  Box,
  Card,
  Heading,
  Text,
  Image,
  Divider,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import Receipt from "../../types";
import styles from "./ReceiptCard.module.scss";
import dayjs from "dayjs";
import "dayjs/locale/en";
import axios from "axios";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { ReceiptPDF } from "../ReceiptPDF/ReceiptPDF";
import femaleAvatar from "../../assets/female-avatar.svg";
import { DeleteIcon, DownloadIcon } from "@chakra-ui/icons";

interface ReceiptCardProps {
  receipt: Receipt;
}

export const ReceiptCard: React.FC<ReceiptCardProps> = ({ receipt }) => {
  const formattedDate = dayjs(receipt.date).format("DD/MM/YYYY");
  const toast = useToast();

  const displayFeedback = (response: Error | string) => {
    toast({
      title: response instanceof Error ? "Error" : response,
      description: response instanceof Error ? response.message : "",
      status: response instanceof Error ? "error" : "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  const handleClickToDelete = async () => {
    try {
      await axios.delete(`http://localhost:80/deleteReceipt/${receipt._id}`);
      displayFeedback("Successfully deleted!");
    } catch (error) {
      displayFeedback(error as Error);
    }
  };

  const handleClickToExport = async () => {
    const receiptPDF = <ReceiptPDF receipt={receipt} />;
    const pdfBlob = await pdf(receiptPDF).toBlob();
    const blobUrl = URL.createObjectURL(pdfBlob);
    const downloadLink = document.createElement("a");

    downloadLink.href = blobUrl;
    downloadLink.download = `${receipt._id}.pdf`;
    downloadLink.click();

    URL.revokeObjectURL(blobUrl);
  };

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
      <IconButton
        onClick={handleClickToDelete}
        className={styles.deleteButton}
        icon={<DeleteIcon />}
        aria-label="Delete"
        size="lg"
        borderRadius="full"
        backgroundColor="red.400"
        color="white"
      />
      <PDFDownloadLink
        document={<ReceiptPDF receipt={receipt} />}
        fileName="receipt.pdf"
      >
        <IconButton
          onClick={handleClickToExport}
          className={styles.exportButton}
          icon={<DownloadIcon />}
          aria-label="Export"
          size="lg"
          borderRadius="full"
          backgroundColor="green.400"
          color="white"
        />
      </PDFDownloadLink>
    </Card>
  );
};
