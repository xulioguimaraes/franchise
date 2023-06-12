import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Img,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Estoque = () => {
  return (
    <Box px={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Box>
            <Text
              textTransform={"uppercase"}
              color={"blue.400"}
              fontWeight={600}
              fontSize={"sm"}
              bg={"blue.50"}
              p={2}
              zIndex={1}
              alignSelf={"flex-start"}
              rounded={"md"}
              w={"max-content"}
            >
              Modelo 2
            </Text>
            <Heading zIndex={1}>Titulo do modelo 2</Heading>
          </Box>
          <Text zIndex={1} color={"gray.600"} fontSize={"lg"}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            itaque nobis quae porro natus minima, fuga molestias nulla, dolorum
            suscipit tempore modi quis unde eligendi quo, expedita sed odit
            pariatur.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/loja44.jpeg"}
            objectFit={"cover"}
            zIndex={1}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
