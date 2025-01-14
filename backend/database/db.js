const mongoose= require("mongoose");
const {MONgoDB_CONNECTION_STRING} = require ("../config/index")
const dbConnect= async()=>{
    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(MONgoDB_CONNECTION_STRING);
        console.log(`Database Connected to host ${conn.connection.host}`);
    } catch(error){
        console.log(`Error: ${error}`)
    }
}
module.exports=dbConnect;
