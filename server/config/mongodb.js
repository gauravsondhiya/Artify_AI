import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
         await mongoose.connect(`${process.env.MONGODB_URL}/Users_data_artifyAI`)
    }
    catch (error){
        console.log("mongodb not connect ")
    }
}

export default connectDb;