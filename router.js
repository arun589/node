const fs=require("fs");
const requesthandler=(req,res)=>{
const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile("message.txt",{encoding:"UTF-8"},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.write("<html>");
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form><body>');
            res.write("</html>");
             res.end();
        });
    }
    if(url==="/message" && method==="POST")
    {
        const body=[];
        req.on("data",(chunk)=>{
            body.push(chunk);
        })
        return req.on("end",()=>{
            const parsedbody=Buffer.concat(body).toString();
            const message=parsedbody.split("=")[1];
            fs.writeFileSync("message.txt",message);
            res.statusCode=302;
            res.setHeader("location","/");
            return res.end();
        })
       
    }
}
module.exports=requesthandler;