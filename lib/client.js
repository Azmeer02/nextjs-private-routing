import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () => {
  const apolloCache = new InMemoryCache();

  const apolloClient = new ApolloClient({
    uri: "https://api-dev.learningwithparents.com/graphql",
    cache: apolloCache,
  });

  return apolloClient;
};
