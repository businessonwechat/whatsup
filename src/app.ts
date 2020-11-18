import http from "http"
import express from "express"
import { applyMiddleware, applyRouters } from "./utils"
import middleware from "./middleware"
import routes from "./services"

const router = express();
applyMiddleware(middleware, router);
applyRouters(routes, router)
// applyMiddleware(errorHandlers, router);

const { PORT = 3373 } = process.env;
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`on http://localhost:${PORT}...`)
});

const sum = (a: number, b: number) => a + b;
setInterval(() => console.log(sum(3, 3)), 1000);
