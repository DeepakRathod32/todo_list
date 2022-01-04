const express = require('express');
const port = 8000;
const app = express();

const db = require('./config/mongoose');
const todolist = require('./models/todolist');

app.use(express.static('assets'));

//use express route
app.use(express.urlencoded({extended: true}));
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        return console.log(`server got error while running ${err}`);
    }

    return console.log(`server is up and running at port: ${port}`);
});
