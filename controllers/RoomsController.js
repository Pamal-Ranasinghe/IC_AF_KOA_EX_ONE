const Room = require('../models/Room');
const Category = require('../models/Category');

const addRoom = async (ctx) => {
    try{
        const {code, amount, wing, pax, category} = ctx.request.body
        const room = new Room({code, amount, wing, pax});

        if (category){
            room.category.push(category);
        }

        await room.save();

        const roomAddedCategory = await Category.findByIdAndUpdate(category,
            {$push:{rooms:room._id}},
            {new:true, useFindAndModify:false}
        );
        
        // await roomAddedCategory.save();

        return (ctx.body = {message: 'Room added successfully', room:roomAddedCategory});

    }catch(err){
        ctx.status = 500;
        return ctx.body = {
            message: err.message
        }
    }
}

const getAllRooms = async (ctx) => {
    try{
        const rooms = await Room.find({});
        return (ctx.body = {rooms:rooms});
    }catch(err){
        ctx.throw(500, err);

    }
}

module.exports = {
    addRoom,
    getAllRooms
}

//62b938eff3a24f451e62d67c