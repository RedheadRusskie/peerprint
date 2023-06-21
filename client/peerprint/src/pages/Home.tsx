import { Box, Center } from "@chakra-ui/react";
import { Backdrop } from "../components/common/Backdrop";

export const Home: React.FC = () => {
  return (
    <Backdrop>
      <Center>
        <Box maxWidth="50em" my="3em">
          test
        </Box>
      </Center>
    </Backdrop>
  );
};
