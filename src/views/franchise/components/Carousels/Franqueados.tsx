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
            src={"/assets/funcionarios-franquia.webp"}
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
            Franqueados
          </Text>
          <Heading>Historia de sucesso</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            {` Márcia e Cláudio adquiriram uma franquia da "A Principal Bebê e
            Mamãe" em Araguaína, Tocantins. Sua loja se tornou um destino
            querido para pais em busca de produtos infantis, Nosso franqueados
            criaram um ambiente acolhedor e se tornaram uma referência na
            cidade. Sua história é um exemplo inspirador de empreendedorismo e
            dedicação .`}
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
