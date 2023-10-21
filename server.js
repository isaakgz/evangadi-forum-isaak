require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./server/config/dbConfig");
const port = process.env.PORT;


app.use(cors());  //middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


 




app.listen(port, ()=>{
    console.log(`listing on port ${port}`)
})