import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.ENDPOINT,
  headers: {
    Authorization: `bearer ${process.env.GRAPH_CMS_TOKEN}`,
  },
});

export default client;
