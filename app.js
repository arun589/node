const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log("from express middleware");
    next();
})
app.use((req,res,next)=>{
    console.log("from middleware 2");
    res.send('<h1>from express middleware</h1>');
})
app.listen(3000);