const Todo = require("../models/todoModles.js")

module.exports.getTodo = async ( req , res ) => {
    const toDo = await Todo.find()
    res.send(toDo)
}

module.exports.saveTodo = async ( req , res) => {
    const {text} = req.body
    Todo
    .create({text})
    .then( (data) => {
        console.log("Data Added SuccessFully");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateTodo = async ( req, res) => {

    const {_id , text} = req.body

    Todo.findByIdAndUpdate(_id , {text})
    .then( ()=> res.send("Updated Successfully"))
    .catch( (err) => console.log(err))
}

module.exports.deleteTodo = async ( req, res) => {

    const {_id } = req.body

    Todo.findByIdAndDelete(_id)
    .then( ()=> res.send("Deleted Successfully"))
    .catch( (err) => console.log(err))
}