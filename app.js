const express=require('express');
const app=express();
const bodyparser=require(`body-parser`);
const adminrouter=require("./routes/admin");
const shoprouter=require("./routes/shop");
app.use(bodyparser.urlencoded({extended:true}));

app.use("/admin",adminrouter);
app.use("/shop",shoprouter);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
})
app.listen(3000);