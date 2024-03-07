const express = require("express")
const path = require("path")
const app = express();

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get("/",(req,res)=>{
    return res.render("home")
})


app.listen(8000,()=> console.log("Server Started at port : 8000"))

