import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
export const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_BASE_URL,
  cache: new InMemoryCache(),
});
const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ApolloProvider>
  </StrictMode>
);
