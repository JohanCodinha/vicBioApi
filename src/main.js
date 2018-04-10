const router = require('./routes/index');

const Koa = require('koa');

const app = new Koa();

app.use(router.routes());

module.exports = app;

app.listen(3000);

