import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:5000/gql',
});

export default client;
