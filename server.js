const express = require('express')
//express app
const app = express()
//route
app.get('/',(req,res)=>{

})
//listen for requests
app.listen(4000,()=>{
    console.log("listening on port 4000")
})