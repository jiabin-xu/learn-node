import Router from 'koa-router';

const HttpRouter = new Router({
    prefix: '/http'
})
HttpRouter.get('/',(ctx,next)=>{
    ctx.body='hello http'
})


export default HttpRouter
