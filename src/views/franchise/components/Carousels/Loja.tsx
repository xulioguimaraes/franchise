import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FeatureList } from "./FeatureList";

export const Loja = () => {
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
              Franquia.
            </Text>
            <Heading zIndex={1}>Lojas</Heading>
          </Box>
          <Text zIndex={1} color={"gray.600"} fontSize={"lg"}>
            {`
Investir em uma franquia da A Principal Bebê e Mamãe traz benefícios financeiros sólidos. Com um modelo de negócio comprovado e suporte contínuo, os franqueados podem obter retorno do investimento de forma eficiente. A marca estabelecida e o marketing centralizado impulsionam as vendas, aumentando a lucratividade.`}
          </Text>
          <FeatureList/>
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
