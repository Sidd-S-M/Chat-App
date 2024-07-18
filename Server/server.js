const path =require('path');
const express=require('express');
var app=express();
const port= process.env.PORT || 3000;
const Public_path=path.join(__dirname,'/../Public');
app.use(express.static(Public_path));
app.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`);
})