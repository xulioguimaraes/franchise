import React from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { Franqueados } from "./Franqueados";
import { Ergino } from "./Ergino";
import { Estoque } from "./Estoque";
import { Satisfacao } from "./Satisfacao";
import { Loja } from "./Loja";
import { PinkBackgroud } from "@/styles/PinkBackgroud";
import { ROSEPRIMARY } from "@/styles/customThemes";

// Settings for the slider
const settings = {
  // dots: true,
  // arrows: false,
  // fade: true,
  infinite: true,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1000,
  // slidesToShow: 1,
  // slidesToScroll: 1,
};

export const Carousel = () => {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "0" });

  return (
    <Box pos={"relative"}>
      <Box
        pos={"relative"}
        bgColor={ROSEPRIMARY}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDir={"column"}
        width={"full"}
        mb={6}
      >
        <Heading
          fontSize={"2.5rem"}
          textTransform={"capitalize"}
          w={"fit-content"}
          color={"white"}
          textAlign={"center"}
          fontWeight={700}
          px={3}
          py={4}
          pb={0}
        >
          MODELOS DE NEGÓCIO
        </Heading>
        <Text
          px={1}
          py={2}
          bgColor={"#00A2D0"}
          maxWidth={"570px"}
          color={"white"}
          textAlign={"center"}
          bottom={"40px"}
          fontSize={{ base: "sm", sm: "lg" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
        </Text>
      </Box>
      <Box
        position={"relative"}
        height={"fit-content"}
        width={"full"}
        overflow={"hidden"}
        mb={4}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Ergino />
          <Franqueados />
          <Estoque />
          <Satisfacao />
        </Slider>
      </Box>
    </Box>
  );
};
