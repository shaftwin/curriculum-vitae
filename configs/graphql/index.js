import { ApolloClient, InMemoryCache } from '@apollo/client';

const { REACT_APP_API_URL } = process.env;
const API_URL = REACT_APP_API_URL || 'http://localhost:9002/graphql';

const graphqlAppClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export default graphqlAppClient;
