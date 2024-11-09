const User = require('../models/userModel')
const bcrypt = require('bcryptjs');
const generateTokenAndSetCookie = require('../utils/generateToken')
async function userSignUp(req, res) {

    try {
        const { fullName, username, password, gender } = req.body;

        const exist = await User.findOne({ username });

        if (exist) {
            return res.status(400).json({
                error: "user already present!!"
            })
        }

        //Hash password!!!

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //random profile image generator api : https://avatar.iran.liara.run/public/[gender]?username=[value]


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`





        const newUser = new User({
            fullName: fullName,
            username: username,
            password: hashedPassword,
            gender: gender,
            profilePicUrl: gender === "male" ? boyProfilePic : girlProfilePic,
        })


        if (newUser) {
            //generate token to directly login the new user!!

            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicUrl: newUser.profilePicUrl
            })

        } else {
            res.status(400).json({
                error: "invalid user data"
            })
        }

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "internal server error!!",
        })
    }

}


async function userLogin(req, res) {

    try{

        const {username,password}=req.body;

        const user=await User.findOne({username});

        const isCorrectPass=await bcrypt.compare(password,user?.password || "");

        if(!isCorrectPass || !user)return res.status(400).json({error:"invalid credentials"});

        generateTokenAndSetCookie(user._id,res);

        return res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePicUrl:user.profilePicUrl,
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error: "internal server error!!",
        })
    }


}


async function userLogout(req,res){
    try{
        res.cookie('jwt',"",{
            maxAge:0
        })
         res.status(200).json({
            success:"Logged Out successfully"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error: "internal server error!!",
        })
    }
}


module.exports = {
    userLogin,
    userSignUp,
    userLogout,
}