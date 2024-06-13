import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDb =async()=>{
    try{
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connection: ${connectionInstance.connection.host}`);
        // try console log connectionInstance only
    }
    catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}
export default connectDb;