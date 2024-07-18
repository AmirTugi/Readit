import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      "#root": {
        overflow: "hidden",
      },
      "html, body, #root": {
        height: "100%",
      },
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: "4xl",
      fontWeight: "bold",
      lineHeight: "110%",
    },
    h2: {
      fontSize: "2xl",
      fontWeight: "bold",
      lineHeight: "110%",
    },
    h3: {
      fontSize: "lg",
      fontWeight: "bold",
      lineHeight: "110%",
    },
    body1: {
      fontSize: "md",
      fontWeight: "medium",
      lineHeight: "110%",
    },
    body2: {
      fontSize: "sm",
      fontWeight: "medium",
      lineHeight: "110%",
    },
  },
  colors: {
    yellow: {
      100: "#fdf7e7",
      200: "#fae8b7",
      300: "#f7d887",
      400: "#f4c857",
      500: "#f1b927",
      600: "#d89f0e",
      700: "#a87c0b",
      800: "#785808",
      900: "#483505",
      1000: "#181202",
    },
    grey: {
      0: "#F7FAFA",
      50: "#E5E8EB",
      100: "#eff2f6",
      200: "#ced9e4",
      300: "#adbfd1",
      400: "#8ca6bf",
      500: "#6b8cad",
      600: "#527394",
      700: "#405973",
      800: "#29384D",
      900: "#141C24",
      1000: "#090d10",
    },
  },
  components: {
    Button: {
      baseStyle: {
        flexShrink: 0,
      },
    },
  },
});
