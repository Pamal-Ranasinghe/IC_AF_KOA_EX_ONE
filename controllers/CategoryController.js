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

module.exports = {addCategory};