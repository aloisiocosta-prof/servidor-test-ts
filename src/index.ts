import http from "node:http";

const hostname = '0.0.0.0';
const port = process.env.PORT | 3000;

const server = http.createServer((_req,res)=>{
res.statusCode = 200;
res.setHeader('Content-Type','text/plain');
res.end('oi mundo');
});

server.listen(port,hostname,()=>{
console.log(`server at http://${hostname}:${port}/`)
});
