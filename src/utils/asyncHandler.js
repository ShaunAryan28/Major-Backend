// you can do this by 2 ways either try catch or by Promises
const asyncHandler = (requestHandler)=>{
    (req,res,next)=> {
        Promise.resolve(requestHandler(res,req,next)).
        catch((err)=>next(err))
    }
}

export {asyncHandler}



// //higher order function ()=>()=>{}
// const asyncHandler =(fn)=>async(req,res, next)=> {
//     try{
//         await fn(req, res, next)
//         }catch(err){
//         res.status(err.code||500).json({
//             success: false,
//             message: err.message
//     })
//     }   
// }