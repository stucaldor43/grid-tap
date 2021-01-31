const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env[DB_SECRET],
});

async function authenticate(email, password) {
  return await client.query(q.Login(q.Match(q.Index(""), email), { password }));
}

exports.handler = async function (event, context) {
  const { email, password } = JSON.parse(event.body);
  const token = await authenticate(email, password);

  if (!token.secret) return { statusCode: 401, body: "" };

  return {
    headers: {
      ["Set-Cookie"]: `id=${token.secret}; Domain=.app.localhost; Path=/; Expires=Thu, 21 Oct 2021 07:28:00 GMT; HttpOnly`,
    },
    statusCode: 200,
  };
};
