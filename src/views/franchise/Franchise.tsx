import { Container, Flex } from "@chakra-ui/react";

import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { WellcomePage } from "./components/WellcomePage";

import GridListWith from "./components/GridListWith";
import { FormRegisterFranchise } from "./components/FormRegisterFranchise";
import { Footer } from "@/components/Footer";
import { Carousel } from "./components/Carousels";
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

          <FormRegisterFranchise />
        </Flex>

        <Carousel />
      </Container>
      <Footer />
    </>
  );
};
