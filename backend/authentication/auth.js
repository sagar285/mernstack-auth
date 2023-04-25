const jwt = require("jsonwebtoken")
const User =require("../models/userschema");
require("dotenv").config();
const secretkey = process.env.KEY;

const auth = async (req,res,next)=>{
    try {
        const token =req.headers.authorization;
        const verfiytoken = jwt.verify(token,secretkey);
        const user = await User.findOne({_id:verfiytoken._id})
        if(!user){
            throw new Error("user not found");
        }
        req.token =token
        req.user =user
        req.userid=user._id
        next();
        
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports =auth;