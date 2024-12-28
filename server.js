const express = require('express')
//express app
const app = express()
//route
app.get('/',(req,res)=>{
    console.log("welcome to the app")
})
//listen for requests
app.listen(4000,()=>{
    console.log("listening on port 4000")
})