const Todo = require('../models/todolist');

module.exports.home = function(req, res){
    Todo.find({}, (err, data) => {
        return res.render('home', {
            title : 'Todo App',
            todo_list  : data,
        });
    })
}

// var todoList = [
//     {
//         text : "do home work",
//         category : "home",
//         date : "02/13/2022"
//     },
//     {
//         text : "Learn node",
//         category : "personal",
//         date : "02/13/2022"
//     },
//     {
//         text : "major project",
//         category : "work",
//         date : "02/13/2022"
//     }
// ];

module.exports.create = function (req, res){
    // todoList.push(req.body);
    console.log(req.body.text);
    console.log(req.body.category);
    console.log(req.body.date);

    Todo.create({
        text : req.body.text,
        category : req.body.category,
        date : req.body.date
    }, function(err, data){
        return res.redirect('back');
    });
    // return res.redirect('back');
}