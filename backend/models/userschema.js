const mongoose =require("mongoose")
const bcrypt =require("bcryptjs");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const secretkey = process.env.KEY;


const Schema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
tokens:[
    {
        token:{
            type:String,
            required:true  
        }
    }
]
})

// password hashing
Schema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
} )

// token generate 

Schema.methods.generatetoken =async function(){
    try {
        let usertoken = jwt.sign({_id:this._id},secretkey);
        this.tokens = this.tokens.concat({token:usertoken});
        await this.save();
        return usertoken;
        
    } catch (error) {
        res.status(422).send(error);
    }
}


const usermodel = mongoose.model("user",Schema);

module.exports =usermodel;