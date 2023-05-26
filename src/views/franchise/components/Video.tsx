import { ROSEPRIMARY } from "@/styles/customThemes";
import { Blob } from "@/views/home/components/Blob";
import { PlayIcon } from "@/views/home/icons/PlayIcon";
import {
  AspectRatio,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

export const Video = () => {
  return (
    <Flex
      flex={1}
      pt={8}
      justify={"center"}
      align={"center"}
      position={"relative"}
      maxW={'2xl'}
      // w={""}
      pr={8}
    >
      <Blob
        w={"250%"}
        h={"250%"}
        position={"absolute"}
        top={"-35%"}
        left={"-70%"}
        zIndex={-1}
        color={"#ffbdda"}
      />
      <Box
        position={"relative"}
        height={"300px"}
        rounded={"2xl"}
        boxShadow={"2xl"}
        width={"full"}
        overflow={"hidden"}
      >
        <IconButton
          aria-label={"Play Button"}
          variant={"ghost"}
          _hover={{ bg: "transparent" }}
          icon={<PlayIcon w={12} h={12} />}
          size={"lg"}
          color={"white"}
          position={"absolute"}
          left={"50%"}
          top={"50%"}
          transform={"translateX(-50%) translateY(-50%)"}
        />
        <AspectRatio w={"100%"} h={"100%"} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/D41Iobi3g90"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Flex>
  );
};
