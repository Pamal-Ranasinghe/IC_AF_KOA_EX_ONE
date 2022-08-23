const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/my_app', () => {
        console.log("Database has been connected");
    })
}

module.exports = {dbConnect};