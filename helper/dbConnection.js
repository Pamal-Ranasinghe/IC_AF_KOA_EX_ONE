const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb://localhost:27017/myapp', () => {
        console.log("Database has been connected");
    })
}

module.exports = {dbConnect};