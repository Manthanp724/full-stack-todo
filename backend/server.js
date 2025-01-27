const express = require("express")
const mongoose = require("mongoose");
const  routes  = require("./routes/todo-route.js");
const cors = require("cors")

require("dotenv").config()

const app  = express()
const port = process.env.PORT;

app.use(express.json())
app.use(cors())



mongoose.connect(process.env.connection_String)
.then((data) => console.log(`Database is connected successfully || ${data.connection.host}`))
.catch((err) => console.log(err))
app.use(routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))