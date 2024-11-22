const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cookieParser=require('cookie-parser');

const connectToMongoDB=require('./db/connectToMongoDB')
const cors=require('cors');
const {app,server}=require("./socket/socket")

const PORT=process.env.PORT || 4000;


app.use(cors({
    origin: "http://localhost:3000", // Frontend URL
    methods: ["GET", "POST"], // Allowed HTTP methods
    credentials: true, // If using authentication
}));

const authRoutes=require('./routes/auth')
const staticRoutes=require('./routes/static');
const messageRoutes=require('./routes/message');
const userRoutes=require('./routes/user')

//middleware
app.use(express.json());     //to handle json input
app.use(express.urlencoded({extended:false}));   //to handle form input
app.use(cookieParser());   //parsing cookie

app.use("/",staticRoutes);
app.use("/api/auth",authRoutes);
app.use('/api/message',messageRoutes);
app.use('/api/user',userRoutes);


server.listen(PORT,()=>{
    connectToMongoDB()
    console.log('server is running at port '+ PORT);
})