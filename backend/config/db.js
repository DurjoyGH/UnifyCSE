const mongoose = require('mongoose');
const { dbConnection } = require('./env');
const colors = require('colors');

const connectDB = async () => {
    mongoose.connect(dbConnection, {
      })
      .then(() => console.log("Database connection established".green.bold))  
      .catch((err) => {
        console.error("Database connection failed".red.bold); 
        console.error(err);
      });  
};

module.exports = connectDB;