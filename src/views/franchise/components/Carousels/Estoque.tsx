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
              Estoque
            </Text>
            <Heading zIndex={1}>Diversidade de produtos.</Heading>
          </Box>
          <Text zIndex={1} color={"gray.600"} fontSize={"lg"}>
            {`A Principal Bebê e Mamãe tem uma estratégia de estoque excepcional, com inventário diversificado e atualizado. Eles antecipam as demandas dos clientes, monitoram o movimento dos produtos e garantem reposições estratégicas. Isso resulta em uma seleção de alta qualidade e conquista a confiança dos clientes.`}
          </Text>
          
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/estoque.webp"}
            objectFit={"cover"}
            zIndex={1}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
