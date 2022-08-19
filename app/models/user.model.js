const mongoose = require('mongoose');
const validator=require('validator');
const { default: isEmail } = require('validator/lib/isEmail');
const UserSchema = mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
   lastname: {
        required: true,
        type: String
    },
    mobileno:{
         type: Number,
         required:true,
         unique:true
    },
email:{
    type:String,
    required:true,
    unique:true,
      validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is inValid");            }
      }
},
address:{
    type:String,
    required:true
},
loginid:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true,
    min:6,
    max:20,
    regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/
}

});

module.exports = mongoose.model('User', UserSchema);
