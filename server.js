require('dotenv').config()

const express = require('express')

//express app
const app = express()

//to access middlewares
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//route
app.get('/',(req,res)=>{
    res.json({mssg:"welcome to the app"})
})

//listen for requests
app.listen(process.env.PORT,()=>{
    console.log("listening on port",process.env.PORT)
})

