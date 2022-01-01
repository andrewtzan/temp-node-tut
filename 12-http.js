//δημιουργια web sserver 

const http = require('http');


//δημιουργια συνδεσης και δημιουργια περιεχομενου.

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('here is our short history')

    }
    res.end(`
        <h1>Ooops!!!</h1>
        <p>we can't seem to find the page you are looking for</p>
        <a href='/'>back home</a>
    
    `)
})

//port που ακουει

server.listen(3000);