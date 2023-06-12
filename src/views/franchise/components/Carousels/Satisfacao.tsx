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

export const Satisfacao = () => {
  return (
    <Box px={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/loja11.jpeg"}
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
            Modelo 4
          </Text>
          <Heading>Titulo do modelo</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi,
            accusamus magni beatae tenetur facilis consequuntur iste totam quos?
            Voluptatem sunt porro commodi exercitationem suscipit iure
            blanditiis animi nesciunt aut temporibus.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
