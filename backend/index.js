const express =require("express");
const app =express();
require("dotenv").config();
require("./dbconnection/connection")
const router = require("./router/route")
const cors =require("cors");
const port = process.env.PORT;

app.use(express.json())
app.use(cors());
app.use(router);




app.listen(port,()=>{
    console.log(`server listening on port no:${port}`);
})