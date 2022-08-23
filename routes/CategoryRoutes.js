const KoaRouter = require('koa-router');
const {addCategory, getAllCategories,getRoomsInEachCategory} = require('../controllers/CategoryController');

const router = new KoaRouter();

router.post('/add/category', addCategory);
router.get('/get-all/categories', getAllCategories);
router.get('/get-all-rooms/category', getRoomsInEachCategory)

module.exports = router;