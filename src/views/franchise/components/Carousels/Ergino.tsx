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
            <Img
              w={["80px", "100px"]}
              h={["70px", "90px"]}
              zIndex={1}
              alt=""
              src={"/assets/logo.png"}
            />
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
                Nossa historia
              </Text>
              <Heading zIndex={1}>A Principal Bebê e Mamãe</Heading>
            </Box>
          </Flex>
          <Text zIndex={1} color={"gray.600"} fontSize={"lg"}>
            {`Ergino construiu "A Principal Bebê e Mamãe", uma loja de artigos
            infantis com 14 anos de mercado. Com produtos de alta qualidade e
            atendimento excepcional, a loja se tornou um destino preferido para
            pais em busca de itens para bebês. Ergino criou um ambiente
            acolhedor e familiar, mantendo-se atualizado com as demandas do
            mercado. Sua história é um testemunho de sucesso baseado na paixão e
            no compromisso em atender às necessidades das famílias.`}
          </Text>
        </Stack>

        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/ergino.webp"}
            objectFit={"cover"}
            zIndex={1}
          />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};
