const KoaRouter = require('koa-router');
const {addCategory} = require('../controllers/CategoryController');

const router = new KoaRouter({prefiex: '/api/category'});

router.post('/add', addCategory);

module.exporrs = router;