const express = require('express');
const app = express();
const cors=require("cors")
const mongodb=require("mongodb")

const URL = "mongodb://localhost:27017//"


app.use(express.json())
app.use(cors({
    origin:"*"
}))

var covid = []

app.post("/project",function(req,res){
    req.body.id = covid.length + 1;
    covid.push(req.body);

res.json({
    message: "Created"
})
})
