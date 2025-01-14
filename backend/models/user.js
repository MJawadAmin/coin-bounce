const mongoose = require ('mongoose');
const {Schema}= mongoose;
const userSchema = new Schema({
    name : {type : String , required : true },
    username :{type : String , required : true },
    email : {type : String , required : true },
    password:{type : String , required : true },
    author : {type : mongoose.SchemaType.ObjectId, ref:'users' },
    created_at : {type : Date , default : Date.now },
},
{timestamps: true}
)
module.exports = mongoose.model('User', userSchema, 'users');