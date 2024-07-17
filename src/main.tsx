import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
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
      100: "#eff2f6",
      200: "#ced9e4",
      300: "#adbfd1",
      400: "#8ca6bf",
      500: "#6b8cad",
      600: "#527394",
      700: "#405973",
      800: "#2e4052",
      900: "#1b2631",
      1000: "#090d10",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
