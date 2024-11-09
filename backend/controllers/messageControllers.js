const Message=require("../models/messageModel")
const Conversation=require("../models/conversationModel");
const User=require("../models/userModel");

async function sendMessage(req,res){
    try{
        const {message}=req.body;
        const {id:recieverId}=req.params; //id of the reciever in the params in url
        const senderId=req.user._id; //id of the logged in user who sent the message

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,recieverId]}
        })

        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,recieverId],
            })
        }
        const newMessage=new Message({
            senderId,
            recieverId:recieverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // this will not run parallel means if conversation takes 1 sec to save then message has towait for 1 sec 
        // await conversation.save();
        // await newMessage.save();

        //both will get save parallely optimised!!!
        await Promise.all([conversation.save(),newMessage.save()]);

        res.status(201).json(newMessage);


    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({
            error: "internal server error!!",
        })
    }
}

async function getMessages(req,res){
    try{

        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages")//populate method is used to get actual messages from messagemodel and not refrence

        if(!conversation)return res.status(200).json([]);

        const messages=conversation.messages;

        res.status(201).json(messages);
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error: "internal server error!!",
        })
    }
}


module.exports={
    sendMessage,
    getMessages,
}