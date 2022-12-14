const mongoose = require('mongoose');
const validator=require('validator');
const { isValidPassword } = require('mongoose-custom-validators');
const { default: isEmail } = require('validator/lib/isEmail');
const UserSchema = mongoose.Schema({
    firstname: {
        required: [true,"please fill the firstname"],
        trim:true,
        unique:true,
        type: String,
        minlength:[2,"minimum 2 letter's"],
        maxlength:[12,"maximum 10 letter's"],
    },
   lastname: {
        required: [true,"please fill the lastname"],
        trim:true,
        unique:true,
        type: String,
        minlength:[2,"minimun 2 letter's"],
        maxlength:[10,"maximum 10 letter's"]  
    },
    mobileno:{
        type: Number,
        required:true,
        min: 100000000,
        max: 9999999999   
    },
email:{
    type: String,
    unique: [true, "email already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "email field is not provided. Cannot create user without email "],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(v);
      },
      message: '{VALUE} is not a valid email!'
    }
},
street:{
    type:String,
    required:true
},city:{
   type:String,
   required:true
},state:{
    type:String,
    required:true
},country:{
  type:String,
  required:true
},
loginid:{
    type: String,
    unique: [true, "login id already exists in database!"],
    lowercase: true,
    trim: true,
    required: [true, "login  id field is not provided. Cannot create user without login id"],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9]{3,8}$/.test(v);
        // /^[a-zA-Z0-9_]{3,16}$/, 
      },
      message: '{VALUE} is not a valid login id!'
    }
},
password:{
    type: String,
    unique: true, 
    trim: true,
    required: [true, "password field is not provided"],
    validate: {
      validator: function (v) {
        // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(v);
      },
      message: '{VALUE} is not a valid password!'
    }
   
},
  date: { type: Date, default: Date.now }

});


// const User = mongoose.model('User', UserSchema);
const User=mongoose.model('firstname',UserSchema);
module.exports = mongoose.model('User', UserSchema);










