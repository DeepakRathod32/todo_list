const mongoose = require('mongoose'); //to import or use mongoose here

mongoose.connect('mongodb://localhost:27017/todo_list_db'); //to connect to mongoose here

const db = mongoose.connection; //to make connection with database mongoose here

db.on('error', console.error.bind(console, 'error occured connecting to db')); //to handle error while  connecting to db

db.once('open', function(){
    console.log('database has setup and running'); //to show this message if connection with db is successfull
});