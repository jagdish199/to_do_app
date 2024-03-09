const {Router} = require("express")
const todoList = require("../models/todo")
const router = Router();

router.post("/",async (req,res)=>{
    const {task,description} = req.body;
    const list = await todoList.find({});
    if(!task)
    {
        return res.render("home",{list:list});
    }
    const result = await todoList.create({
        task : task,
        description:description
    })
    return res.redirect("/");
})

router.get("/",async (req,res)=>{
    const list = await todoList.find({});
    return res.render("home",{list:list});
})

router.delete("/delete/:taskId",async (req,res)=>{
    const taskid = req.params.taskId;

    await todoList.findOneAndDelete({_id : taskid});

    return res.redirect("/")
})



module.exports = router;