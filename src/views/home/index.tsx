import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Blob } from "./components/Blob";
import { PlayIcon } from "./icons/PlayIcon";
import { FlexContainer } from "../../styles/FlexContainer";
import { ROSEPRIMARY } from "../../styles/customThemes";
import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { useRouter } from "next/router";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <NextSeo
        title="INDIQUE E GANHE! | A Principal Bebê e Mamãe"
        description="Faça parte da nossa rede de indicação e ganhe recompensas por
        suas indicações."
      />
      <Box as="main">
        <FlexContainer pos={"relative"}>
          <PinkBackgroud />
          <Container maxW={"7xl"} mt={[16, 0]}>
            <Stack
              align={"center"}
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 22 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
                >
                  <Text
                    as={"span"}
                    position={"relative"}
                    _after={{
                      content: "''",
                      width: "full",
                      height: "30%",
                      position: "absolute",
                      bottom: 1,
                      left: 0,
                      bg: ROSEPRIMARY,
                      zIndex: -1,
                    }}
                  >
                    INDIQUE E GANHE!
                  </Text>
                  <br />
                  <Text
                    mt={4}
                    fontSize={"5xl"}
                    pos={"relative"}
                    lineHeight={"1"}
                    as={"p"}
                    color={ROSEPRIMARY}
                  >
                    ATÉ R$ 5.000,00 por sua indicação.
                  </Text>
                </Heading>
                <Text color={"gray.500"} zIndex={1}>
                  Faça parte da nossa rede de indicação e ganhe recompensas por
                  suas indicações. É Muito simples, assista o video e entenda
                  como funciona as regras do nosso programa de indicação! Para
                  você gerar o seu link de indicação basta clicar no botão
                  abaixo.
                </Text>
                <Stack
                  spacing={{ base: 4, sm: 6 }}
                  direction={{ base: "column", sm: "row" }}
                >
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={6}
                    onClick={() => router.push("/cadastro-influenciador")}
                    colorScheme={"red"}
                    bg={ROSEPRIMARY}
                    _hover={{ bg: "pink.300", borderColor: "pink.400" }}
                  >
                    GERAR MEU LINK DE INDICAÇÃO
                  </Button>
                  <Link href="/saiba-mais" passHref prefetch>
                    <Button
                      rounded={"full"}
                      size={"lg"}
                      fontWeight={"normal"}
                      colorScheme="whatsapp"
                      px={6}
                      type="button"
                      leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
                    >
                      Saiba mais
                    </Button>
                  </Link>
                </Stack>
              </Stack>
              <Flex
                flex={1}
                justify={"center"}
                align={"center"}
                position={"relative"}
                w={"full"}
              >
                <Blob
                  w={"150%"}
                  h={"150%"}
                  position={"absolute"}
                  top={"-20%"}
                  left={0}
                  zIndex={-1}
                  color={useColorModeValue("red.50", ROSEPRIMARY)}
                />
                <Box
                  position={"relative"}
                  height={"300px"}
                  rounded={"2xl"}
                  boxShadow={"2xl"}
                  width={"full"}
                  overflow={"hidden"}
                >
                  <IconButton
                    aria-label={"Play Button"}
                    variant={"ghost"}
                    _hover={{ bg: "transparent" }}
                    icon={<PlayIcon w={12} h={12} />}
                    size={"lg"}
                    color={"white"}
                    position={"absolute"}
                    left={"50%"}
                    top={"50%"}
                    transform={"translateX(-50%) translateY(-50%)"}
                  />
                  <AspectRatio w={"100%"} h={"100%"} ratio={1}>
                    <iframe
                      title="naruto"
                      src="https://www.youtube.com/embed/D41Iobi3g90"
                      allowFullScreen
                    />
                  </AspectRatio>
                </Box>
              </Flex>
            </Stack>
            {isMobile && <Footer position={"absolute"} left={0} />}
          </Container>
        </FlexContainer>
      </Box>
      {!isMobile && <Footer />}
    </>
  );
}
