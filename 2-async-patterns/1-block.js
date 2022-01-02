const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        // BLOCKING CODE!!!
        for(let i = 0;i<1000;i++){
            for(let j = 0;j<1000;j++){
                console.log(`${i} ${j}`);
            }
        }
        res.end('Home Page')
    }
    if(req.url === '/about'){
        res.end('About Page')
    }
    res.end('Error Page')




})

server.listen(3000,()=>{
    console.log('server listen on port 3000');
})