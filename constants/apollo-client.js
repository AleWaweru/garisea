import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { API_URL } from "./urls";

const httpLink = new HttpLink({
  url: `${API_URL}/graphql`,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});
