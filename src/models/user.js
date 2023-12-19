import mongoose from "./index.js";

const validataEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e);
}

const userSchema = mongoose.Schema({
    firstName:{type:String,required:[true,'First Name is requried']},
    lastName:{type:String,required:[true,'Last Name is requried']},
    email:{type:String,required:[true,'Email-ID is requried'],validate:validataEmail},
    role:{type:String,default:'user'},
    status:{type:Boolean,default:true},
    createAt:{type:Date,default:Date.now()}

},{
    collection:'users',
    versionKey:false
})

const UserModel = mongoose.model('users',userSchema)

export default UserModel