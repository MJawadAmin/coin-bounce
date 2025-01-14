const mongoose = require ('mongoose');
const {Schema}= mongoose;
const commentsSchema = new Schema({
    content : {type : String , required : true },
    blog :{type : mongoose.SchemaType.ObjectId, ref:'blog'},
    author : {type : mongoose.SchemaType.ObjectId, ref:'users' },
    created_at : {type : Date , default : Date.now },
},
{timestamps: true}
)
module.exports = mongoose.model('Comment', commentsSchema , 'comments');