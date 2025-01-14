const mongoose = require('mongoose');
const MONGODB_CONNECTION_STRING= require ('../config/index')
const connectioString= "mongodb+srv://jjawadamn883:jjawadamn883@cluster0.uif7o.mongodb.net/coin-bounce?retryWrites=true&w=majority&appName=Cluster0";
const dbConnect= async()=>{
    try {
        const conn = await mongoose.connect(connectioString);
        console.log(`Database connected succesfully : ${conn.connection.host}`);
}
catch(error){
    console.log(`Error : ${error}`)
}}
module.exports=dbConnect;
