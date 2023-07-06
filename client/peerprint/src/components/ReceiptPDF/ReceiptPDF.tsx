import React from "react";
import Receipt from "../../types";
import { Document, Page, Text, StyleSheet, View } from "@react-pdf/renderer";
import dayjs from "dayjs";

const styles = StyleSheet.create({
  page: {
    padding: "2cm",
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    backgroundColor: "#805AD5",
    color: "#FFFFFF",
    padding: 20,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#6B46C1",
    width: "50%",
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
    width: "50%",
  },
  totalSection: {
    marginTop: 20,
    borderTop: "1px solid #6B46C1",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B46C1",
  },
  disclaimer: {
    fontSize: 10,
    color: "#666666",
    marginTop: 40,
    textAlign: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
});

interface ReceiptPDFProps {
  receipt: Receipt;
}

export const ReceiptPDF: React.FC<ReceiptPDFProps> = ({ receipt }) => {
  const formattedDate = dayjs(receipt.date).format("DD/MM/YYYY");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.heading}>
          <Text>PeerPrint</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>{formattedDate}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Receipt ID:</Text>
            <Text style={styles.value}>{receipt._id}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.label}>Service:</Text>
            <Text style={styles.value}>{receipt.service}</Text>
          </View>
        </View>
        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalLabel}>${receipt.total}</Text>
        </View>
        <Text style={styles.disclaimer}>
          **This is an electronic receipt and does not require a signature.
        </Text>
      </Page>
    </Document>
  );
};
