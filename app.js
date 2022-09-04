import Koa from 'koa'
import useRoutes from './routers/index.js'
const app = new Koa();



// app.use(router.routes())
// .use(router.allowedMethods());

useRoutes(app)

app.listen(3000);