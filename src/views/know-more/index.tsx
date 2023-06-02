import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Img as ImgChakra,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Feature } from "./components/Feature";
import { FcAssistant, FcDonate, FcIdea, FcInTransit } from "react-icons/fc";
import { Footer } from "../../components/Footer";

import { Carousel } from "./components/Carousel";
import { NextSeo } from "next-seo";
export default function KnowMore() {
  return (
    <>
      <NextSeo
        title="SAIBA MAIS | A Principal Bebê e Mamãe"
        description="Saiba mais sobre nós!"
      />
      <Box
        pos={"absolute"}
        bgColor={"#ffbdda"}
        w={"100vw"}
        overflow={"hidden"}
        height={["650px", "500px"]}
      />
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        w={"99vw"}
        overflowX={"hidden"}
      >
        <Container maxW={"7xl"} py={12}>
          <Stack spacing={12}>
            <Flex gap={10} flexDir={{ base: "column", md: "row" }}>
              <Stack flex={1} spacing={4}>
                <Flex zIndex={2} justify={"flex-start"} align={"center"}>
                  <ImgChakra
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
                      bg={useColorModeValue("blue.50", "blue.900")}
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
                <Text zIndex={1} color={"CaptionText"} fontSize={"lg"}>
                  Seja bem-vindo , {`à FRANQUIA A Principal Bebê e Mamãe`}
                  somos uma loja especializada em produtos para bebês 0 há 10
                  anos. Com 45 anos de história, que foi passada de pai para
                  filho. Hoje estamos presente em 3 Estados e 15 cidades total
                  de 22 lojas. Temos como meta 100 lojas em todo território do
                  Brasil até 2032.
                </Text>
                <Heading size={"lg"} zIndex={1}>
                  Temos como MISSÃO:
                </Heading>
                <Text zIndex={1} color={"CaptionText"} fontSize={"lg"}>
                  Servimos as famílias! Oferecendo produtos e serviços de
                  qualidade e preços justos, assim participamos da maior e mais
                  incrível experiencia humana, desde a gestação até a primeira
                  infância, construindo laços de amor, respeito e confiança.
                </Text>
              </Stack>

              <Flex maxW={"320px"}>
                <Carousel />
              </Flex>
            </Flex>
            <Flex flexDir={["column-reverse", "row"]}>
              <Flex pr={8} w={["100vw", "100%"]}>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/assets/exibir01.jpeg"}
                  objectFit={"cover"}
                />
              </Flex>
              <Flex pr={8} w={["100vw", "100%"]}>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={"/assets/exibir02.jpeg"}
                  objectFit={"cover"}
                />
              </Flex>
            </Flex>

            <Box py={8}>
              <Heading textAlign={"center"}>Benefícios</Heading>
              <Box p={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={"Suporte técnico."}
                    text={
                      "Temos um time capacitado com um suporte para você nosso franqueado ter segurança e sucesso em sua loja! Contamos com o suporte nas áreas: Financeira, Comercial, Compras, Recursos Humanos, Tecnologia, Departamento Pessoas, Acessória jurídica, Logística, Controle de estoque, Marketing e muito mais.."
                    }
                  />
                  <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={"Marketing e vendas."}
                    text={
                      "Temos uma metodologia de marketing e vendas bastante arrojados com o objetivo de posicionamento e vendas bastante audaciosos! Tornado assim nossas lojas uma maquina de vendas. "
                    }
                  />
                  <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={"Compras coletivas."}
                    text={
                      "Tendo em vista que nossos fornecedores é um pilar multiplicador e parceiro do nosso negócio, temos uma relação do ganha-ganha onde com os volumes de compras conseguimos ser competitivo e lucrativo no mercado."
                    }
                  />
                  <Feature
                    icon={<Icon as={FcIdea} w={10} h={10} />}
                    title={"Capital Intelectual."}
                    text={
                      "Ser empresário é uma missão árdua e isolada. Para aliviar isto nosso time de franqueados se reúne 2 x por mês para poder alinhar estratégias e compartilhar boas práticas aplicadas. Temos treinamentos toda semana com todo o time de vendas."
                    }
                  />
                </SimpleGrid>
              </Box>
            </Box>
          </Stack>
        </Container>
        <Footer />
      </Flex>
    </>
  );
}
