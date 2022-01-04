const mongoose = require('mongoose');
const { schema } = require('../../contact_list/models/contact');

const todoSchema = new mongoose.Schema({   
        text : {
            type : String,
            required : true
        },
        category : {
            type : String,
            required : true
        },
        date : {
            type : String,
            required : true
        }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;