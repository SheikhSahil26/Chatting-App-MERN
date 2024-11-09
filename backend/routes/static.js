const express=require('express')
const router=express.Router();

router.get('/',async(req,res)=>{
    console.log('home page')
})

router.get('/signup',async(req,res)=>{
    console.log('signUp page!!!');
})

router.get('/login',async(req,res)=>{
    console.log('login page!!!');
})


module.exports=router;