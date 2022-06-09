let opts = {
  info: {
    title: "Fastify-api",
    description: "Nodejs and fastify",
    version: "1.0.0",
  },
  host: "http://localhost:5000/",
  schemas: ["http", "https"],
  tags: [
    { name: "User", description: "Only single user data" },
    {
      name: "Users",
      description: "All the users routes exists here",
    },
  ],
}
module.exports = opts
