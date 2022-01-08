const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
// const todolist = require('./models/todolist');

app.use(express.static('assets')); // to use static files in nodejs

//use express route
app.use(express.urlencoded({extended: true})); // it's a middleware to get access of data before using in nodejs 
app.use('/', require('./routes'));

app.set('view engine', 'ejs'); // to use ejs as view engine
app.set('views', './views'); // to use ejs file from specified folder

app.listen(port, function(err){  // to check if express server is in running state or not
    if(err){
        return console.log(`server got error while running ${err}`);
    }

    return console.log(`server is up and running at port: ${port}`);
});
