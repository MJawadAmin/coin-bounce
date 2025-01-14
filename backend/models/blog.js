const mongoose = require ('mongoose');
const {Schema}= mongoose;
const blogSchema = new Schema({
    title : {type : String , required : true },
    content:{ type : String , required : true },
    photopath : {type : String , required : true },
    author : {type : mongoose.SchemaType.ObjectId, ref:'users' },
    created_at : {type : Date , default : Date.now },
},
{timestamps: true}
)
module.exports = mongoose.model('Blog', blogSchema, 'blogs');