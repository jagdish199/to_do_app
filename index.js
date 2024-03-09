const express = require("express")
const path = require("path")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const todoRoute = require("./routes/todo")
const app = express();

mongoose.connect("mongodb://localhost:27017/todolist").then(()=> console.log("MongoDB successfully Connected"))

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

// app.get("/",(req,res)=>{
//     return res.render("home")
// })
app.use("/",todoRoute);

app.listen(8000,()=> console.log("Server Started at port : 8000"))

