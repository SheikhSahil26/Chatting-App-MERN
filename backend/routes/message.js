const express=require('express');
const router=express.Router();
const {sendMessage,getMessages}=require("../controllers/messageControllers")
const {protectedRoutes}=require("../middlewares/protectedRoutes")



router.get('/getmessages/:id',protectedRoutes,getMessages)

router.post('/send/:id',protectedRoutes,sendMessage);

module.exports=router;