import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Element } from "react-scroll";

export default function Success() {
  return (
    
      <Box textAlign="center" py={10} px={6}>
        <Icon boxSize={"80px"} color={"green.500"}>
          <BsCheckCircleFill />
        </Icon>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Cadastro realizado
        </Heading>
        <Text color={"gray.500"}>
          Em breve entraremos em contato para conversarmos sobre o seu novo
          investimento. Em instantes, você receberá uma mensagem no seu
          WhatsApp.
        </Text>
      </Box>
   
  );
}
