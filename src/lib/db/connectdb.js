import mongoose from "mongoose";

export default async function connectdb(){
    try {
         let connaction;
         connaction = await mongoose.connect()    
        
    } catch (error) {
        console.log(error);
        
    }
}