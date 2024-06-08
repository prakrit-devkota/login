const express=require('express')
const router=express.Router();

const users=require('./user.js');


router.get('/signup',(req,res)=>{
    res.render('./view.ejs')
})
router.post('/signup',async (req,res)=>{
    let name=await req.body.name;
    let email=await req.body.email;
    let password=await req.body.password;
    await new users({
        name:name,
        email:email,
        password:password
    }).save()

  res.redirect('/login')
  
})
router.get('/login',async(req,res)=>{
    res.render('./login.ejs')
})
router.post('/login',async(req,res)=>{
    let myemail=await req.body.email
    let password=await req.body.password
    const user=await users.findOne({email:myemail})
    const orgpassword=user.password;
    if(password==orgpassword){
       res.end('You are verified')
    }
    else{
        res.redirect('/signup')
    }



    

})

module.exports=router;