const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }
})

const todoList = mongoose.model('list',todoSchema);

module.exports = todoList;