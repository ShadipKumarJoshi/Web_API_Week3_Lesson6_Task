// importing mongodb
const mongoose = require('mongoose');
const dotenv = require('dotenv');


// dotenv configuration 
dotenv.config()

// Make a unique function
// Creating a function with unique name to connect database
const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_LOCAL).then(() => {
        console.log('Database Connected!!!')
    })
}

// Exporting the function
module.exports = connectDatabase;



