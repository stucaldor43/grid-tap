const { GraphQLClient } = require("graphql-request");

const client = new GraphQLClient(`https://graphql.fauna.com/graphql`, {
  headers: { Authorization: `Bearer ${process.env.DB_SECRET}` },
});

module.exports = {
  client,
};
