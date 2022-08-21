const mongoose = require('mongoose');

const {Schema} = mongoose;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    descriptinon: {
        type: String,
        requriured: true,
    },

    rooms: [{
        type: Schema.Types.ObjectId,
        ref: 'Room',
    }],

}, {timestamps: true})

const Category = mongooese.model('Category', CategorySchema);
module.exports = Category;