const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader("content-Type","text/html");
    //res.write("<html><body><h1>welcome to node js project</h1></body></html>");
    if(req.url==="/home"){
        res.write("<html><body><h1>welcome to my home</h1></body></html>");
    }
    if(req.url==="/about"){
        res.write("<html><body><h1>welcome to about us page</h1></body></html>");
    }
    if(req.url==="/node"){
        res.write("<html><body><h1>welcome to my node js project</h1></body></html>");
    }
    res.end();
})
server.listen(4000);