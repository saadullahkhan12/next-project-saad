import mongoose from "mongoose";

export default async function connectDB(){
    try {
         let connaction;
         connaction = await mongoose.connect(process.env.MONGODB_URI)    
        
    } catch (error) {
        console.log(error);
        
    }
}