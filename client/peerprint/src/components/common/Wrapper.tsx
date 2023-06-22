import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box p="2em" width="100%">
      {children}
    </Box>
  );
};
