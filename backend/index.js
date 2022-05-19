const express = require('express');
const env = require('dotenv');

const app = express()

//Configuartion environment variable

env.config();

app.get('/', (req,res,next) => {
    console.log("jj")
    res.status(200).json({
        message: "Hello!, this message from the server",
    })
})
//Run the server

app.listen(process.env.PORT || 8800, (req,res)=> {
    console.log(`server is running on the port ${process.env.PORT}`)
})