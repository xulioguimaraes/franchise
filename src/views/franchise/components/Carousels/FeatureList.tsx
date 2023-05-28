import {
  Flex,
  HStack,
  Icon,
  Stack,
  StackDivider,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text whiteSpace={"nowrap"} fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};
export const FeatureList = () => {
  return (
    <HStack flexWrap={"wrap"} gap={4}>
      <Feature
        icon={<Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />}
        iconBg={useColorModeValue("yellow.100", "yellow.900")}
        text={"Planejamento de Negócios"}
      />
      <Feature
        icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
        iconBg={useColorModeValue("green.100", "green.900")}
        text={"Planejamento Financeiro"}
      />
      <Feature
        icon={<Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />}
        iconBg={useColorModeValue("purple.100", "purple.900")}
        text={"Análise de Mercado"}
      />
    </HStack>
  );
};
