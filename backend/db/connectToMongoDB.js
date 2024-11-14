const mongoose=require('mongoose');

const connectToMongoDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('connected to mongoDB');
    }
    catch(error){
        console.log(error)
        console.log('error connecting to mongo db')
    }
}

module.exports=connectToMongoDB