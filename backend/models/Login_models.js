import mongoose, { Types } from "mongoose";

const { Schema } = mongoose;

const login_models= new Schema ({
    email:{
         type: String,
         required: true 
    },
    password:{
         type: String,
         required: true 
    }
})

export default login_models;