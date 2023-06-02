import { customTheme } from "@/styles/customThemes";
import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "../styles/styles.css";

import "nprogress/nprogress.css";
import { NextSeo } from "next-seo";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <NextSeo
        title="Indique e ganhe"
        description="Faça parte da nossa rede de indicação e ganhe recompensas por
        suas indicações."
        canonical="https://aprincipalbb.com.br/"
        openGraph={{
          url: "https://aprincipalbb.com.br/indicação",
          title: "Indique e ganhe",
          description:
            "Faça parte da nossa rede de indicação e ganhe recompensas por suas indicações.",
          images: [
            {
              url: "/assets/logo.png",
              width: 800,
              height: 600,
              alt: "Imagem da página",
            },
          ],

          site_name: "Indique e ganhe",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/assets/logo.png",
          },
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
