const express=require('express');
const socketio= require('socket.io');
let app=express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
//let server = http.createServer(app);
const port= process.env.PORT || 3001;
http.listen(port, ()=>{
    console.log(`Server is Running on port ${port}`);
})