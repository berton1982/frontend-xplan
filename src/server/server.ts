/*
 * @Description: 文件描述
 * @Version: 1.0
 * @Author: Berton J.
 * @Date: 2019-10-30 07:45:04
 * @LastEditTime: 2019-11-03 22:02:55
 * @LastEditors: Berton J.
 */
import Koa from "koa";
import Router from "koa-router";
import createNextServer from "next";
import nextConf from "../../next.config";

const dev = process.env.NODE_ENV !== "production";
const nextApp = createNextServer({
  dev,
  dir: "./src/next",
  conf: nextConf
});
const nextHandle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server: Koa = new Koa();
  const router: Router = new Router();

  server.use(async ctx => {
    await nextHandle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  // router.all('*', ctx=>{
  //     ctx.body = 'hello test'
  // })

  server.use(router.routes());

  server.listen(3000, () => {
    console.log("server started on port 3000");
  });
});
