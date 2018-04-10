const Router = require('koa-router');
const auth = require('../controllers/auth');

const router = new Router();
const authRouter = new Router();

authRouter.prefix('/auth');
authRouter.get('/guest', auth.guest);

router.use(authRouter.routes());

module.exports = router;
