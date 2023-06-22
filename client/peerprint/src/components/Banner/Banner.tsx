import {
  Box,
  Grid,
  GridItem,
  Text,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import heartWoman from "../../assets/heart-woman.svg";

export const Banner: React.FC = () => {
  const imageMaxWidth = useBreakpointValue({ base: "100%", md: "22em" });
  const textFontSize = useBreakpointValue({ base: "2rem", md: "4rem" });

  return (
    <Box
      width="100%"
      p="1em 1em 0 1em"
      borderRadius="xl"
      background="linear-gradient(180deg,rgba(128,90,213,1) 16%, rgba(128,90,213,0.06) 100%)"
    >
      <Grid templateColumns="1fr 1fr" gap={4}>
        <GridItem>
          <Flex
            direction="column"
            justify="flex-end"
            align="flex-start"
            height="100%"
          >
            <Text
              lineHeight="0.9em"
              fontWeight="black"
              fontSize={textFontSize}
              color="white"
              p="1em"
            >
              Store, edit, remove and print.
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Box>
            <Image
              maxWidth={imageMaxWidth}
              src={heartWoman}
              alt="Banner image"
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
