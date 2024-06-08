require('dotenv').config();
const express=require('express');
app=express()

const bodyParser=require('body-parser')
const mongoose=require('mongoose')
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("mongodbconnected")
}).catch((err)=>{
    console.log(err)
})
app.set('view engline','ejs');
app.use(express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true})); 
const router=require('./router');
const port=process.env.PORT || 3000
app.use('/',router);
app.listen(port,()=>{
    console.log("server has been connected")
})


