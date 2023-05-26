import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";

import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { WellcomePage } from "./components/WellcomePage";
import ReactInputMask from "react-input-mask";
import { Controller, useForm } from "react-hook-form";
import { ROSEPRIMARY } from "@/styles/customThemes";
import GridListWith from "./components/GridListWith";
import { FormRegisterFranchise } from "./components/FormRegisterFranchise";
import { Footer } from "@/components/Footer";
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
      </Container>
      <Footer />
    </>
  );
};
