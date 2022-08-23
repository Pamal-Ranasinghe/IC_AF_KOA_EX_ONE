const Category = require('../models/Category');
const Room = require('../models/Room');

const addCategory = async (ctx) => {
    try{

        const {name, description} = ctx.request.body;
        const categiory = new Category({name, description});

        await categiory.save();

        return ctx.body = {
            message: 'Category has been added successfully',
        }

    } catch(err) {
        ctx.status = 500;
        ctx.body = {
            message: err.message
        }
    }
}


const getAllCategories = async (ctx) => {
    try{
        const categories = await Category.find();
        return ctx.body = {
            categories
        }
    } catch(err) {
        ctx.status = 500;
        ctx.body = {
            message: err.message
        }
    }
}

const getRoomsInEachCategory = async (ctx) => {
    try{
        const rooms = await Category.find().populate('rooms')

        return ctx.body = {
             message: 'Rooms are retrieved successfully',
             rooms: rooms
        }
    } catch (err) {
        ctx.status = 500;
        return ctx.body = {
            message: err.message
        }
    }
}

module.exports = {addCategory,getAllCategories,getRoomsInEachCategory};