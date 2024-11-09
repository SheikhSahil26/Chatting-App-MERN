const express=require('express');
const { protectedRoutes } = require('../middlewares/protectedRoutes');
const router=express.Router();
const {getAllUsersForSideBar}=require("../controllers/userControllers")


router.get('/',protectedRoutes,getAllUsersForSideBar);



module.exports=router