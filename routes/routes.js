const users = require("../items")
const { optsGetAllUsers, getSingleUseropts, createUserOpts, deleteUserOpts, updateUserOpts } = require("../schemas/users")

function appRoutes(fastify, options, done) {
  fastify.get("/users", optsGetAllUsers)

  fastify.get("/users/:uid", getSingleUseropts)


  fastify.post("/createuser",createUserOpts)

  fastify.delete("/deleteuser",deleteUserOpts)

  fastify.put("/updateUser",updateUserOpts)
  done()
}
module.exports = appRoutes
