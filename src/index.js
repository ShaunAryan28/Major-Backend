//require(`dotenv`).config({path: './env'})
import connectDb from "./db/index.js";
import dotenv, { configDotenv } from "dotenv"
import { app } from './app.js';
dotenv.config({
    path: './.env'

})


connectDb()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTiON failed", err);
})























// const app = express();

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.
//             MONGODB_URI}/${DB_NAME}`)
//             app.on("error", (error)=>{
//                 console.log("Error: ", error);
//                 throw error
//             })

//             app.listen(process.env.PORT, ()=>{
//                 console.log(`listening on port ${process.env.PORT}`);
//             })

//     }catch(error){
//         console.error("ERROR: ", error)
//         throw err
//     }
// })()