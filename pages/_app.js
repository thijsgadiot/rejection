import "../src/styles/global.css";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { mapStatusToScore } from "../src/mappers/status-to-score";

const httpLink = createHttpLink({
  uri: "https://graphql.fauna.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("dbToken");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const cache = new InMemoryCache({
  typePolicies: {
    Question: {
      fields: {
        score: {
          read(_, { readField }) {
            return mapStatusToScore(readField("status") || 0);
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />{" "}
    </ApolloProvider>
  );
}
