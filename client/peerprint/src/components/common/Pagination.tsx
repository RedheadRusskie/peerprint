import React from "react";
import { ReactNode, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Flex, Grid } from "@chakra-ui/react";

interface PaginationProps {
  children: ReactNode;
  itemsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  children,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const allChildren = React.Children.toArray(children);
  const totalPages = Math.ceil(allChildren.length / itemsPerPage);
  const startingIndex = (currentPage - 1) * itemsPerPage;
  const visibleChildren = allChildren.slice(
    startingIndex,
    startingIndex + itemsPerPage
  );
  const buttonValues = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <Box>
      <Grid
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        gap="2em"
        width="100%"
      >
        {visibleChildren.length > 0 && visibleChildren}
      </Grid>
      <Flex justify="center">
        {buttonValues.map((value) => (
          <Button
            key={uuidv4()}
            margin="0.5em"
            variant={value === currentPage ? "solid" : "outline"}
            backgroundColor={value === currentPage ? "purple.300" : "gray.200"}
            color="white"
            onClick={() => setCurrentPage(value)}
            borderRadius="full"
            maxWidth="1.2em"
          >
            {value}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};
