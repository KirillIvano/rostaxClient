import ApolloClient, {gql} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:5000/gql',
});

client
  .query({
    query: gql`{
        products {
            name
        }
    }
    `
  })
  .then(result => console.log(result));

export default client;