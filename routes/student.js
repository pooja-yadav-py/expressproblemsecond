//step 1: import express and create an instance
const express = require('express');


//first step for writing files:- imported fs module from node js
const fs = require('fs');
const router = express.Router();

const folderPath = `${__dirname}/data`;

//step 2: secondary route
router.get("/",(req,res) => {
    res.send("student secondary path");
});


router.get("/studentsLIST",(req,res) => {
    
    fs.readFile(`${folderPath}/student.json`,(err,data) => {
     if(err){
         console.log(err);
     }else{
         const dataFromFile = JSON.parse(data);
         console.log(dataFromFile);
         res.send({results:dataFromFile});
     }
    })
});

router.post("/createDetails",(req,res) =>{
    //console.log("Data from client side",req.body);
    const studentData = req.body;

    //use write file method
    fs.writeFile(`${folderPath}/student.json`,JSON.stringify(studentData),function(err){
        if(err){
              console.log("Error in writing file",err);
        } else{
              console.log("file writing successfully");
        }
    })
    res.send("character created succesfully");
})


//step 3 : export Router
module.exports = router; 
