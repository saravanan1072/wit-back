
const express=require('express');
const route=require('./Routes/route');
const cors=require("cors")
const app=express();
const connect=require('./database/Connection')

app.use(express.json())

app.use(cors())
app.use(express.static('public'))
 app.use(route)

app.listen(3001,async()=>{
   await connect()
    console.log("server running on port localhost:3001")
})