var Koa = require('koa'); // 引入koa
var { Server } = require('http')
var Router = require('koa-router'); // 引入koa-router
var bodyParser = require('koa-bodyparser');


 module.exports = class ChaosServer {
    constructor(options) {
      this.options = Object.assign({
        port: 12580,
        host: '127.0.0.1'
      }, options);
  
      this.app = new Koa();
      this.server = Server;
      this.enabled = false;
      this.handlers = new Map();
    }
  
    get prefix() {
      return this.options.prefix;
    }
  
    async start() {
      this.use(bodyParser());
  
      const homeRouter = new Router();
      homeRouter.get('/', async (ctx) => {
        ctx.body = 'Chaosblade server start successful';
      });
  
      this.use(homeRouter.routes());
  
      const handlerRouter = new Router();
  
      if (this.prefix) {
        handlerRouter.prefix(this.prefix);
      }
  
    //   this.registerHandler(handlerRouter, PrepareHandler);
    //   this.registerHandler(handlerRouter, StatusHandler);
    //   this.registerHandler(handlerRouter, CreateHandler);
    //   this.registerHandler(handlerRouter, DestroyHandler);
    handlerRouter.get(`/mozi`, async (ctx) => {
        // const request = this.parseContextToRequest(ctx);
        // const response = await handler.handle(request);
       const __data = await new Promise((resolve) => {
           setTimeout(()=>{
            resolve('墨子工程')
           },3000)
          });
        ctx.body = __data;
      });

      handlerRouter.get(`/create`, async (ctx) => {
        this.handlers.set('mozi01','djdjjksdsdhsf')
        ctx.body = 'sunccess';
      });
      this.use(handlerRouter.routes());
  
      this.use(async (ctx) => {
        ctx.status = 404;
      });
  
      return new Promise((resolve) => {
        this.server = this.app.listen({
          host: this.options.host,
          port: this.options.port
        }, resolve);
      });
    }
  
    use(mid) {
      this.app.use(mid);
    }
  
    registerHandler(router, Handler) {
    //   const handler = new Handler();
    //   const name = handler.getHandlerName();
    //   this.handlers.set(name, handler);
  
      router.get(`/${name}`, async (ctx) => {
        // const request = this.parseContextToRequest(ctx);
        // const response = await handler.handle(request);
  
        ctx.body = response;
      });
    }
  
    // parseContextToRequest(ctx) {
    //   const { headers, query } = ctx;
    //   const request = new Request();
  
    //   Object.keys(headers).forEach((headerKey) => {
    //     request.addHeader(headerKey, headers[headerKey]);
    //   });
  
    //   Object.keys(query).forEach((queryKey) => {
    //     request.addParam(queryKey, query[queryKey]);
    //   });
  
    //   return request;
    // }
  
    async stop() {
      if(this.server) {
        this.handlers.forEach((handler) => {
          handler.unload();
        });
        this.server.close();
        this.server = null;
        this.handlers.clear();
      }
    }
  }