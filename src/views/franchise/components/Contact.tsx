import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import {
  FcAddressBook,
  FcAssistant,
  FcConferenceCall,
  FcCustomerSupport,
  FcDonate,
  FcInTransit,
} from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack align={"center"}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text textAlign={"center"} color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function Contact() {
  return (
    <Box p={4} mb={6}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcConferenceCall} w={10} h={10} />}
          title={"Escritorio"}
          text={
            "Avenida Antônio Maia, 1405, Velha Marabá. Marabá/PA - 68500-005"
          }
        />
        <Feature
          icon={<Icon as={FcCustomerSupport} w={10} h={10} />}
          title={"Contato"}
          text={"(94) 98112-4170"}
        />
        <Feature
          icon={<Icon as={FcAddressBook} w={10} h={10} />}
          title={"E-mail"}
          text={"franquia@aprincipalbb.com.br"}
        />
      </SimpleGrid>
    </Box>
  );
}
