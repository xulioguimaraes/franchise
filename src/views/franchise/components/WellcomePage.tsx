import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ROSEPRIMARY } from "@/styles/customThemes";
import { Link } from "react-scroll";

export const WellcomePage = () => {
  return (
    <Flex as={Flex} h={"100vh"}>
      <Flex flex={1} justify={"center"} align={"center"} zIndex={1}>
        <Box>
          <Text
            textTransform={"capitalize"}
            bg={"#ff167c"}
            color={"white"}
            p={3}
            fontWeight={700}
            maxW={"2xl"}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "2.7rem" })}
          >
            INICIE SEU PRÓPIO NEGÓCIO, SEJA UM FRANQUEADO!
          </Text>

          <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            color={"blue.600"}
            maxW={500}
            my={6}
            pl={3}
          >
            A Principal Bebê e Mamãe é
            <Text as={"span"} color={"pink.400"}>
              {" "}
              a maior
            </Text>{" "}
            rede especializada em enxoval de bebê do Brasil.
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            gap={4}
            width={"fit-content"}
          >
            <Link to="formulario" smooth={true} duration={500}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={8}
                width={"full"}
                colorScheme={"red"}
                bg={ROSEPRIMARY}
                _hover={{ bg: "pink.300", borderColor: "pink.400" }}
              >
                Seja Franqueado
              </Button>
            </Link>
            <Link to="more" smooth={true} duration={500}>
              <Button
                rounded={"full"}
                size={"lg"}
                width={"full"}
                fontWeight={"normal"}
                px={8}
                colorScheme={"red"}
                bg={"#00A2D0"}
                _hover={{ bg: "blue.300", borderColor: "blue.400" }}
              >
                Sobre Nós
              </Button>
            </Link>
            <Link to="more" smooth={true} duration={500}>
              <Button
                rounded={"full"}
                width={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={8}
                colorScheme={"red"}
                bg={"#00A2D0"}
                _hover={{ bg: "blue.300", borderColor: "blue.400" }}
              >
                Modelos de negócio
              </Button>
            </Link>
            <Link to="more" smooth={true} duration={500}>
              <Button
                rounded={"full"}
                width={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={8}
                colorScheme={"red"}
                bg={"#00A2D0"}
                _hover={{ bg: "blue.300", borderColor: "blue.400" }}
              >
                Nossos produtos
              </Button>
            </Link>
          </SimpleGrid>
        </Box>
      </Flex>
      <Flex justify={"center"} align={"center"}>
        <Stack maxW={"md"}>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/loja2.jpeg"}
            objectFit={"cover"}
            zIndex={1}
          />
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={"/assets/loja-franquia.webp"}
            objectFit={"cover"}
            zIndex={1}
          />
        </Stack>
      </Flex>
    </Flex>
  );
};
