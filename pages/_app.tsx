import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../apolloClien";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
