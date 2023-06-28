import { Box, Flex, Text } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Box backgroundColor="white" px={4} py={5}>
        <Flex
          m="auto"
          maxWidth="95em"
          px={30}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/">
            <Flex>
              <Text fontSize="3xl" fontWeight="bold" color="purple.500">
                Peer
              </Text>
              <Text fontSize="3xl" fontWeight="light" color="purple.500">
                Print
              </Text>
            </Flex>
          </Link>
          <Flex>
            <Link to="/placeholder1">
              <Text
                fontSize="xl"
                mr={4}
                fontWeight="extrabold"
                color="purple.500"
              >
                About
              </Text>
            </Link>
            <Link to="/pleholder2">
              <Text
                fontSize="xl"
                mr={4}
                fontWeight="extrabold"
                color="purple.500"
              >
                Contact
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </BrowserRouter>
  );
};
