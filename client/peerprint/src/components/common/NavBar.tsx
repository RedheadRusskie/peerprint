import { Box, Flex, Text } from "@chakra-ui/react";
import { BrowserRouter, Link } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Box backgroundColor="rgb(28, 7, 51)" px={4} py={5}>
        <Flex px={30} justifyContent="space-between" alignItems="center">
          <Link to="/">
            <Flex>
              {" "}
              <Text fontSize="3xl" fontWeight="bold" color="white">
                Peer
              </Text>
              <Text fontSize="3xl" fontWeight="light" color="white">
                Print
              </Text>
            </Flex>
          </Link>
          <Flex>
            <Link to="/placeholder1">
              <Text fontSize="xl" mr={4} color="white">
                About
              </Text>
            </Link>
            <Link to="/pleholder2">
              <Text fontSize="xl" mr={4} color="white">
                Contact
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </BrowserRouter>
  );
};
