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
            src={"/assets/pessoas-loja.webp"}
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
            Clientes
          </Text>
          <Heading>Satisfação garantida</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
            {`A Principal Bebê e Mamãe é reconhecida por atrair uma grande quantidade de clientes. Sua reputação de qualidade, variedade de produtos e atendimento excepcional faz com que pais e mães confiem na loja para suprir suas necessidades. A dedicação em oferecer uma experiência positiva e satisfatória resultou em uma base sólida de clientes fiéis. A Principal Bebê e Mamãe continua a crescer e prosperar, graças ao apoio e preferência dos clientes satisfeitos.`}
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
