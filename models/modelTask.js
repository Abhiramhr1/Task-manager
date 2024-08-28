const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'This field is required please input a variable'],
        trim:true,
        maxlength:[20,'max length of name is 20 characters']
    },completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model('tasks',TaskSchema);