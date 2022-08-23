const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const KoaRouter = require('koa-router');
const cors = require('@koa/cors');
const json = require('koa-json');

const {dbConnect} = require('./helper/dbConnection');
const categoryRoutes = require('./routes/CategoryRoutes');
const roomRoutes = require('./routes/RoomRoutes');

const app = new Koa();
const router = new KoaRouter();


app.use(cors());
app.use(bodyParser());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());
app.use (categoryRoutes.routes());
app.use(roomRoutes.routes());

// app.use(async ctx => {
//     ctx.body = 'Hello World';
// }); 


app.listen(3000, () => {
    dbConnect();
    console.log('Server is running on port 3000');
});