const mongoose = require('mongoose')
// const connectionString ='mongodb+srv://abhiramhr1smg:VoCqmbQ8BudeR3Sr@taskmanager.jdrk1.mongodb.net/?retryWrites=true&w=majority&appName=TaskManager'
const connectDB=(url)=>
{
    return mongoose
    .connect(url//connectionString
        ,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
}
module.exports=connectDB;

// .then(()=>console.log('connected to the db'))
// .catch((err)=>console.log(err));