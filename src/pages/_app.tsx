import { CacheProvider, EmotionCache } from "@emotion/react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import Error from "next/error";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { FC, PropsWithChildren, useEffect, useRef } from "react";
import { hotjar } from "react-hotjar";
import Footer from "../components/Footer";
import SfAppBar from "../components/SfAppBar";
import IdContext from "../contexts/IdContext";
import NetworkContext from "../contexts/NetworkContext";
import { useMatomo } from "../hooks/useMatomo";
import { tryGetNetwork, tryGetString } from "../redux/networks";
import { wrapper } from "../redux/store";
import "../styles/app.css";
import "../styles/graphiql.min.css";
import useSfTheme from "../styles/useSfTheme";
import createEmotionCache from "../utils/createEmotionCache";
import { isDynamicRoute } from "../utils/isDynamicRoute";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = useSfTheme();
  const scrollableContentRef = useRef<HTMLElement>(null);

  useMatomo();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_HJID && process.env.NEXT_PUBLIC_HJSV) {
      hotjar.initialize(
        Number(process.env.NEXT_PUBLIC_HJID),
        Number(process.env.NEXT_PUBLIC_HJSV)
      );
    } else {
      console.log("Hotjar not initialized.");
    }

    /**
     * Nextjs is scrolling window on route changes but because
     * we are using another scrollable content wrapper,
     * we have to handle scrolling separately.
     */
    Router.events.on("routeChangeComplete", () => {
      if (scrollableContentRef.current) {
        scrollableContentRef.current.scrollTo({ top: 0 });
      }
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Superfluid Console</title>
        {/* "theme-mode" is required to be in the head element by `useSfTheme`. */}
        <meta id="theme-mode" name="theme-mode" content={theme.palette.mode} />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            maxHeight: "100vh",
          }}
        >
          <SfAppBar />
          <Box
            ref={scrollableContentRef}
            component="main"
            sx={{ height: "100vh", overflow: "auto" }}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

/**
 * Scopes to network & id for dynamic routes. Idea is to reduce boilerplate in the specific pageObjects. The downside is that a bit less can be pre-rendered.
 */
const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const router = useRouter();
  const { _network, _id } = router.query;

  // For dynamic routes, pre-load the network and the entity ID. Makes the specific page implementations less boilerplate-y.
  if (isDynamicRoute(router)) {
    if (router.isReady) {
      const network = tryGetNetwork(_network);
      const id = tryGetString(_id);

      if (network && id) {
        return (
          <NetworkContext.Provider value={network}>
            <IdContext.Provider value={id}>{children}</IdContext.Provider>
          </NetworkContext.Provider>
        );
      } else if (network) {
        return (
          <NetworkContext.Provider value={network}>
            {children}
          </NetworkContext.Provider>
        );
      } else {
        return <Error statusCode={404} />;
      }
    } else {
      return (
        // Prefer to show blank page here instead of a loader (less flickering).
        <Box sx={{ width: "100vw" }} />
      );
    }
  }

  // For non-dynamic routes, don't do anything special.
  return <>{children}</>;
};

// NOTE: This wraps the React code with Redux provider component.
export default wrapper.withRedux(MyApp);

// There were some weird moments with Emotion cache'ing and SSR, so to figure out _the actual_ rendered theme this helper looks at the DOM.
export const getRenderedThemeMode = (): "light" | "dark" => {
  // Theme mode is saved to meta tag. We look for it from the DOM because of static optimizations of Next.js.
  const themeModeMetaElement = window.document.getElementById("theme-mode");
  if (!themeModeMetaElement) {
    console.error("Meta tag for theme mode not found!"); // Sometimes happens with HMR.
    return "light"; // *sigh*, default to light.
  }
  return themeModeMetaElement.getAttribute("content") as "light" | "dark";
};
