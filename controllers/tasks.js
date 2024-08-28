const getAllTasks = (req,res)=>
{
    res.send("all items in the item list");
}

const createTask=(req,res)=>{
        // res.send('create task');
        res.json(req.body);
}
const updateTask=(req,res)=>{
    res.send('update task');
}
const deleteTask=(req,res)=>{
    res.send('delete task');
}
const getTask=(req,res)=>{
    const {id} = req.params;
    // res.send('get single task');
    res.json(id)
}
module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask};