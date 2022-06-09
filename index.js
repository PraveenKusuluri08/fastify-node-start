const fastify = require("fastify")({
  logger: true,
})
const YAML = require("yamljs")
let document = YAML.load("./swagger.yaml")
fastify.register(require("fastify-swagger"), {
  routePrefix: "/docs",
  exposeRoute: true,
  swagger: require("./swaggerConfig"),
  // swagger: document,
})

const appRoutes = require("./routes/routes")

fastify.register(appRoutes)

fastify.listen(5000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  } else {
    console.log("App is listining")
  }
})
