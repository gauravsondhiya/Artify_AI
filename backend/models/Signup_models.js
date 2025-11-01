import mongoose, { Schema } from "mongoose";


const Signup_models=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
         type:String,
        required:true
    }
    
})

let usertable= mongoose.model("usertable",Signup_models)

export default usertable