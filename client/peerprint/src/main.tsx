import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/common/Footer.tsx";
import { NavBar } from "./components/common/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <NavBar />
      <App />
      <Footer />
    </ChakraProvider>
  </React.StrictMode>
);
