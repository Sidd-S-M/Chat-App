const path = require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');
const publicPath=path.join(__dirname,'/../Public');
const port = process.env.PORT || 3000;
let app=express();
let Server=http.createServer(app);
let io=socketIO(Server);
app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log("A new user connected");
})
Server.listen(3000,()=>{
    console.log(`Server is running on port ${port}`)
})

