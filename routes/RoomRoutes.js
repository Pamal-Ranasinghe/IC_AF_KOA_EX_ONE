const KoaRouter = require('koa-router');
const {addRoom, getAllRooms} = require('../controllers/RoomsController');

const router = new KoaRouter();

router.post('/add-room', addRoom);
router.get('/get-all/rooms', getAllRooms);

module.exports = router;