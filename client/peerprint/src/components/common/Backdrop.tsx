import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type BackdropProps = {
  children: ReactNode;
};

export const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" width="100%" backgroundColor="white">
      {children}
    </Box>
  );
};
