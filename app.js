console.log('Task Manager App')
// require('./db/connect')
const express = require('express')
const app = express()
const tasks=require('./routes/routerTasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 3000;
//mideware
app.use(express.json())

//just checking is the rouute is working
app.get('/hello',(req,res)=>{
    res.send("task manager app");
})
app.use('/api/v1/tasks',tasks);

const start = async()=>
{
    try{
        await connectDB(process.env.MONGOOSE_URI);
        console.log('connected to db');
        app.listen(port,console.log(`server is listening on port ${port}`))
    }
    catch(err){
        console.log(`error connecting to db: ${err}`);
    }
}
start()