const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const { app, server } = require("./socket/socket");
const connectToMongoDB = require('./db/connectToMongoDB');

const PORT = process.env.PORT || 4000;

// CORS configuration
app.use(cors({
    origin: "https://baatchit-lyart.vercel.app", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
}));

app.options("*", cors({
    origin: "https://baatchit-lyart.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
const authRoutes = require('./routes/auth');
const staticRoutes = require('./routes/static');
const messageRoutes = require('./routes/message');
const userRoutes = require('./routes/user');

app.use("/", staticRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, "frontend", "dist")));

// SPA fallback
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start server
server.listen(PORT, '0.0.0.0', () => {
    connectToMongoDB();
    console.log('Server is running at port ' + PORT);
});
