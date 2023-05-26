import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";
import { Video } from "./Video";
import { Card } from "./Card";
import { ROSEPRIMARY } from "@/styles/customThemes";

export default function GridListWith() {
  return (
    <Flex flex={1}>
      <Box>
        <Box maxW={"3xl"} pos={"relative"}>
          <Heading
            fontSize={"6xl"}
            textTransform={"capitalize"}
            bgColor={"#00A2D0"}
            w={"fit-content"}
            color={"white"}
            px={3}
            py={4}
            mb={"5rem"}
            h={"6rem"}
            pos={"relative"}
            fontWeight={700}
            lineHeight={1.2}
          >
            Benefícios da franquia
          </Heading>
          <Text
            ml={4}
            px={1}
            py={2}
            bgColor={ROSEPRIMARY}
            w={"fit-content"}
            color={"white"}
            pos={"absolute"}
            bottom={"-60px"}
            fontSize={{ base: "sm", sm: "lg" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet
            officiis.
          </Text>
        </Box>
        <Flex justify={"center"}>
          <Video />
        </Flex>

        <Flex mt={12} flexWrap="wrap" gridGap={4} pr={8}>
          <Stack spacing={4} flex={1}>
            <Card
              heading={"Gerenciamento"}
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              description={"Auxílio e planejamento do estoque inicial."}
              href={"#"}
            />

            <Card
              heading={"Estabilidade"}
              icon={<Icon as={FcDonate} w={10} h={10} />}
              description={
                "Plano de negócio validado, marca consolidada e investimento seguro."
              }
              href={"#"}
            />
          </Stack>
          <Stack spacing={4} mt={8} flex={1}>
            <Card
              heading={"Cooperação"}
              icon={<Icon as={FcCollaboration} w={10} h={10} />}
              description={"Gestão Colaborativa com suporte personalizável."}
              href={"#"}
            />

            <Card
              heading={"Longevidade"}
              icon={<Icon as={FcManager} w={10} h={10} />}
              description={
                "Mais de 11 anos no mercado com grande destaque regional."
              }
              href={"#"}
            />
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
}