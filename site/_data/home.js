const { gql } = require("graphql-request");
const { client } = require("./../../api/graphql/client");

async function getFeaturedInfluencers() {
  const query = gql`
    query {
      allInfluencers(_size: 4) {
        data {
          title
          firstName
          avatarUrl {
            url
          }
          photos {
            data {
              url
            }
          }
        }
      }
    }
  `;

  return await client.request(query);
}

module.exports = async function () {
  const {
    allInfluencers: { data: featuredInfluencers },
  } = await getFeaturedInfluencers();

  return {
    featuredInfluencers,
  };
};
