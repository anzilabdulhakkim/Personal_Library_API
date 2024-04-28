const express = require('express');
const server = express();
const connection = require('./config/db');
const userRoute = require('./routes/userRoute');
const bookRoute = require('./routes/bookRoute');
const PORT = process.env.PORT || 9090;
require('dotenv').config();


server.use(express.json())
server.use("/user",userRoute)
server.use("/book",bookRoute);

server.get('/',(req,res)=>{
    res.send("Home Page");
})

server.listen(PORT, async()=>{
    try {
        await connection;
        console.log(`server is running on Port: ${PORT} and db is connected.`); 
    } 
    catch (error) {
        console.log(error);
    }
})
