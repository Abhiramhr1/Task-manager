const taskModel = require('../models/modelTask')

const getAllTasks = async(req,res)=>
{
    //res.send("all items in the item list");
    try {
        const tasks = await taskModel.find({});
        res.status(200).json({tasks});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error});
    }
}

const createTask=async(req,res)=>{ //async bcz of database inetraction
        // res.send('create task');
        try{
        const task = await taskModel.create(req.body)
        console.log(task);
        //console.log(req.body);
        res.status(201).json({task});
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({msg:error});
        }
}




const deleteTask = async(req,res)=>{
    //res.send('delete task');
    try {
        const {id:taskID} = req.params;
        const task = await taskModel.findOneAndDelete({_id:taskID})
        if(!task)
            {
                res.status(404).json({msg:`no task with the id ${taskID}`})
            }
            return res.status(200).json({task});
        } catch (error) {
            console.log(error);
            res.status(500).json({msg:error});
        }
    }
    
    
    const getTask= async(req,res)=>{
        
        try {
            const {id:taskID} = req.params;
            const singleTask = await taskModel.findOne({_id:taskID});
            if(!singleTask)
                {
                    return res.status(404).json({msg:`no task with id : ${taskID}`});
                }
                res.status(200).json({singleTask})
                //res.status(200).json({id: req.params.id})
            } catch (error) {
                console.log(error);
                res.status(500).json({msg:error});
            }
            // res.send('get single task');
            //res.json(id)
        }
        const updateTask=async(req,res)=>{
            try{
                const {id:taskID} = req.params;
                const task = await taskModel.findOneAndUpdate({_id:taskID},req.body,{
                    new:true, //by default it returs old data after updating ,by using this it returns the new data which is used for updating
                    runValidators:true, //while updating validators doesnt work, use this argument for working
                    }
                )
                // res.status(200).json({id:taskID,data:req.body});
                if(!task)
                {

                    res.status(404).json({msg:`No task found with id : ${taskID}`})
                }
                res.status(200).json({task});
            }
            catch(error)
            {
                console.log(error);
                res.status(500).json({msg:error});
            }
            // res.send('update task');
        }
        module.exports = {getAllTasks,createTask,updateTask,deleteTask,getTask};