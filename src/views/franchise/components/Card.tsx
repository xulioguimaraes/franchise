import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

export const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      w={"full"}
      minH={"52"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={"white"}
      p={4}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button> */}
      </Stack>
    </Box>
  );
};
