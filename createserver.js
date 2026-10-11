/*const http = require('http');

const server = http.createServer(function(req,res){
    
    res.end("welcome to my first server");
})

server.listen(3000);*/
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(function(req,res,next){
    console.log("middleware called");
    next();
})

app.get("/",function(req,res){
    res.send("Habibi");
})
app.get("/about",function(req,res,next){
   return next(new Error("error in about page"));
});

app.use(function(err,req,res,next){
    console.log(err);
    res.status(500).send("something went wrong");
})

app.listen(3000);
