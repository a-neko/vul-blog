const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
  res.render('login');
})
router.post('/',(req,res,next)=>{
  res.send('receive req');
})

module.exports=router;

