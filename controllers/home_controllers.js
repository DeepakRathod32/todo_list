const Todo = require('../models/todolist'); //to get data from mongoose/mongodb
var id = [];

// this will render to do list on the page
module.exports.home = function(req, res){
    Todo.find({}, (err, data) => {
        return res.render('home', {
            title : 'Todo App',
            todo_list  : data,
        });
    })
}

// this is to create database in mongodb
module.exports.create = function (req, res){
    Todo.create({
        text : req.body.text,
        category : req.body.category,
        date : req.body.date,
    }, function(err, data){
        return res.redirect('back');
    });
    
}

// this is to delete single/multiple todo's while clicking on delete button
module.exports.delete = function(req, res){
       
    Todo.deleteMany({
        _id: { $in: req.body.tasks},
    }, (err) => {
        if(err)
            console.log('Error in deleting from DB');
        return res.redirect('back');
    })
}
