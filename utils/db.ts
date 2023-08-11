import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const db = ()=>{
    mongoose.connect(process.env.DB!).then(()=>{
        console.log("connected 😍😍");
    }).catch((error : Error)=>{
        console.log(error);
    })
}