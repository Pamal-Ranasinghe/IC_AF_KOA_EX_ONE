const KoaRouter = require('koa-router');
const {addCategory} = require('../controllers/CategoryController');

const router = new KoaRouter();

router.post('/add/category', addCategory);

module.exports = router;