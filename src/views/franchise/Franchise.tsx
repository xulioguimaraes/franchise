import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { WellcomePage } from "./components/WellcomePage";

import GridListWith from "./components/GridListWith";
import { FormRegisterFranchise } from "./components/FormRegisterFranchise";
import { Footer } from "@/components/Footer";
import { Carousel } from "./components/Carousels";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
interface FranchiseProps {
  slug: string;
}

export const Franchise = ({ slug }: FranchiseProps) => {
  return (
    <>
      <PinkBackgroud h={"100vh"} right={0} w={"50%"} />

      <Container as={"main"} maxW={"7xl"}>
        <WellcomePage />

        <Flex my={22} as={Flex}>
          <GridListWith />
          <Element name="formulario">
            <FormRegisterFranchise slug={slug} />
          </Element>
        </Flex>

        <Element name="more">
          <Carousel />
        </Element>
        <SimpleGrid py={10} columns={{ base: 1, md: 2 }} spacing={10}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum architecto, adipisci consequuntur cumque maiores eius
              ratione saepe velit explicabo corporis blanditiis sapiente eum.
              Earum facere quidem exercitationem, laboriosam repudiandae
              accusantium?
            </Text>
          </Stack>

          <Flex >
            <Image
            
              rounded={"md"}
              alt={"feature image"}
              src={"/assets/ergino.webp"}
              objectFit={"cover"}
              zIndex={1}
            />
          </Flex>
        </SimpleGrid>

        <Contact />
      </Container>
      <Footer />
    </>
  );
};
