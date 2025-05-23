import mongoose from "mongoose";


const userSchema = new mongoose.Schema ({
    name:{
      type:String,
      required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    creditbalance:{
       type:Number,
       default:5
    }
})

const useModel = mongoose.models.user || mongoose.model("user",userSchema)

export default useModel ;