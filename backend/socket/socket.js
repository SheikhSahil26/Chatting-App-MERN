// import { Server } from "socket.io";
// import http from 'http';
// import express from 'express'
// import cors from 'cors'

// const  app=express()

// const server=http.createServer(app)
const express=require("express");
const app=express();
const {createServer}=require("node:http");
const {join}=require('node:path')
const {Server}=require("socket.io");
const cors=require('cors')


const server=createServer(app);



app.use(cors({
    origin: ["https://baatchit-lyart.vercel.app/"], // Frontend URL
    methods: ["GET","POST"], // Allowed HTTP methods
    credentials: true, // If using authentication
}));


const io=new Server(server,{
    cors:{
        origin:"https://baatchit-lyart.vercel.app/",
        methods:["GET","POST"]
    }
})

const getRecieverSocketId=(recieverId)=>{
    return userSocketMap[recieverId];
}

const userSocketMap={}




io.on('connection',(socket)=>{
    console.log('a user connected',socket.id)

    const userId=socket.handshake.query.userId;

    if(userId!='undefined') userSocketMap[userId]=socket.id;

    io.emit('getOnlineUsers',Object.keys(userSocketMap))

    socket.on('disconnect',()=>{
        console.log("a user disconnected",socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers',Object.keys(userSocketMap))


    })
})

module.exports={
    app,io,server,getRecieverSocketId
}