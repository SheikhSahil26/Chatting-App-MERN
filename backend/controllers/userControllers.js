const User=require("../models/userModel");


async function getAllUsersForSideBar(req,res){
    try{
        const LoggedInUser=req.user._id;
    
        const otherUsers=await User.find({_id:{$ne : LoggedInUser}}).select("-password");
    
        res.status(200).json(otherUsers)

    }catch(error){
        console.log("error in get users function");
        res.status(500).json({error:"internal server error!!"});
    }


}




module.exports={
    getAllUsersForSideBar,
}