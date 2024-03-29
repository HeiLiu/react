const Koa = require('koa')
const cors = require('koa-cors')
const router = require('./routers/index')
const app = new Koa()


// app.use(main)
app.use(cors({
  origin: 'http://localhost:3000',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authenticate'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content=Type', 'Authorization', 'Accept']
}))
app.use(router.routes())

app.listen(3006)

console.log("app started at port 3006..")