import { ReactNode } from "react";
import { Box, Center } from "@chakra-ui/react";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Center>
      <Box p="2em" maxWidth="95em" width="100%">
        {children}
      </Box>
    </Center>
  );
};
