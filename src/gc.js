import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: `${SERVER_ORIGIN}/gql`,
    fetch: fetch,
});

export default client;
