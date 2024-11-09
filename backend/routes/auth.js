const express=require("express");
const router=express.Router();
const {userLogin,userSignUp,userLogout}=require('../controllers/authControllers')

router.post('/signup',userSignUp);

router.post('/login',userLogin);

router.post('/logout',userLogout);

module.exports=router;