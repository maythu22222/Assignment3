const express = require("express");
const app = express();
const fs = require("fs");

app.get("",(req,res)=>{
    fs.readFile("./assign3.html",(error,data)=>{
        res.write(data);
        return res.end();
    })
})

app.listen(1500,()=>{
    console.log("Server running at port: 1500 ");
})
