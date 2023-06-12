import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";

export const Franqueados = () => {
  return (
    <Box px={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/loja22.jpeg"}
            objectFit={"cover"}
          />
        </Flex>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={"blue.50"}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            modelo 3
          </Text>
          <Heading> Titulo do modelo</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            repellendus perspiciatis adipisci cumque ducimus, aliquam expedita
            fugit dolore et! Nesciunt hic enim laboriosam modi velit aliquid
            saepe et ducimus maiores!
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
