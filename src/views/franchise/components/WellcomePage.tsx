import { Box, Button, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { ROSEPRIMARY } from "@/styles/customThemes";
import { Link } from "react-scroll";

export const WellcomePage = () => {
  return (
    <Flex as={Flex} h={"100vh"}>
      <Flex
        flex={1}
        justify={"center"}
        align={"center"}
        zIndex={1}
        position={"relative"}
      >
        <Box position={"absolute"} left={0}>
          <Text
            whiteSpace={"nowrap"}
            textTransform={"capitalize"}
            bg={"#ff167c"}
            color={"white"}
            p={3}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            Inicie seu próprio negócio,
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            textTransform={"capitalize"}
            p={3}
            lineHeight={1.2}
            w={"fit-content"}
            bg={"#ff167c"}
            fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
          >
            seja um franqueado!
          </Text>

          <Text color={"GrayText"} maxW={500} my={6} pl={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            illo soluta maiores aut corrupti quod omnis. Consectetur voluptates.
          </Text>
          <Flex gap={4}>
            <Link to="formulario" smooth={true} duration={500}>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={8}
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
                fontWeight={"normal"}
                px={8}
                colorScheme={"red"}
                bg={"#00A2D0"}
                _hover={{ bg: "blue.300", borderColor: "blue.400" }}
              >
                Sobre Nós
              </Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
      <Flex flex={1} my={12} position="relative">
        <Box
          w={"full"}
          backgroundImage={"/assets/loja.webp"}
          backgroundSize={"cover"}
          backgroundPosition={"20% 50%"}
        />

        <Box
          pos={"absolute"}
          top={0}
          left={0}
          w={"full"}
          h={"full"}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        />
      </Flex>
    </Flex>
  );
};
