import Router from 'koa-router';

const KoaRouter = new Router({
    prefix: '/koa'
})
KoaRouter.get('/',(ctx,next)=>{
    ctx.body='hello koa'
})


export default KoaRouter
