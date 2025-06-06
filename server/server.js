//Server.js
const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser');
const cors = require('cors')
const authRoutes = require('./routes/auth.route');

const connectDB = require('./config/database')

PORT = process.env.PORT || 5001

dotenv.config() 
const app = express()

app.use(express.json())

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173', 
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
}) 