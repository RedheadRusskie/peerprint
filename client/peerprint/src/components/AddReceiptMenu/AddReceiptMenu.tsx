import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  NumberInput,
  NumberInputField,
  useToast,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Receipt from "../../types";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AddReceiptMenu.module.scss";

export const AddReceiptMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Receipt>();
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

  const onSubmit: SubmitHandler<Receipt> = async (data) => {
    const date = new Date(data.date);
    const dataWithCorrectTypes: Receipt = {
      ...data,
      total: Number(data.total),
      date: date,
    };

    try {
      await axios.post("http://localhost:80/addReceipt", dataWithCorrectTypes);
      displayFeedback("Receipt added!");
    } catch (error) {
      displayFeedback(error as Error);
    }

    onClose();
  };

  return (
    <Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="2xl">Add Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Service</FormLabel>
                  <Select {...register("service", { required: true })}>
                    <option value="session">Session</option>
                    <option value="correction">Correction</option>
                  </Select>
                  {errors.service && (
                    <span role="alert">This field is required</span>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Total</FormLabel>
                  <NumberInput>
                    <NumberInputField
                      type="number"
                      {...register("total", { required: true })}
                    />
                  </NumberInput>
                  {errors.total && (
                    <span role="alert">This field is required</span>
                  )}
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Date</FormLabel>
                  <Input
                    type="date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <span role="alert">This field is required</span>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" {...register("name")} />
                </FormControl>
                <FormControl>
                  <FormLabel>Surname</FormLabel>
                  <Input type="text" {...register("surname")} />
                </FormControl>
                <Button
                  borderRadius="full"
                  type="submit"
                  backgroundColor="purple.500"
                  color="white"
                >
                  Add
                </Button>
                <Button borderRadius="full" variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </Stack>
            </form>
            <ModalFooter />
          </ModalBody>
        </ModalContent>
      </Modal>
      <IconButton
        onClick={onOpen}
        className={styles.addBtn}
        icon={<AddIcon />}
        size="lg"
        boxSize="2.4em"
        aria-label="add receipt"
        color="white"
        backgroundColor="purple.500"
        variant="solid"
        borderRadius="full"
      />
    </Box>
  );
};
