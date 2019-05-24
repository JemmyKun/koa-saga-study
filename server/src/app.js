const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const static = require("koa-static");
const bodyparser = require("koa-bodyparser");
const path = require("path");
const cors = require("@koa/cors");

const app = new Koa();
const router = new Router();
const port = process.env.PORT || "3009";
const staticPath = path.join(process.cwd(), "../client/build");
const routerContrller = require("./router");
routerContrller(router);

app
  .use(cors())
  .use(bodyparser())
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(static(staticPath))
  .listen(port, () => {
    console.log("hello koa! port:", port);
  });
