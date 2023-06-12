import {
  Box,
  Flex,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export const Ergino = () => {
  return (
    <Box px={16}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Flex zIndex={2} justify={"center"} align={"center"}>
            <Box pl={4}>
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
                Modelo 1
              </Text>
              <Heading zIndex={1}>Titulo do modelo</Heading>
            </Box>
          </Flex>
          <Text zIndex={1} color={"gray.600"} fontSize={"lg"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            architecto, adipisci consequuntur cumque maiores eius ratione saepe
            velit explicabo corporis blanditiis sapiente eum. Earum facere
            quidem exercitationem, laboriosam repudiandae accusantium?
          </Text>
        </Stack>

        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/loja-franquia.webp"}
            objectFit={"cover"}
            zIndex={1}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
