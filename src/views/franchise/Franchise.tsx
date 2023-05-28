import { Container, Flex } from "@chakra-ui/react";

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
      <PinkBackgroud h={370} />
      <Container as={"main"} maxW={"7xl"}>
        <WellcomePage />

        <Flex my={12} as={Flex}>
          <GridListWith />
          <Element name="formulario">
            <FormRegisterFranchise slug={slug} />
          </Element>
        </Flex>
        <Element name="more">
          <Carousel />
        </Element>

        <Contact />
      </Container>
      <Footer />
    </>
  );
};
