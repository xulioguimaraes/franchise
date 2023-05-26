import { customTheme } from "@/styles/customThemes";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />

      <Component {...pageProps} />
    </ChakraProvider>
  );
}
