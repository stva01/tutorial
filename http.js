const http = require('http');
const server=http.createServer((req,res)=>{
    if (req.url==='/'){
        res.end('welcome to my home page ')
    }
    if (req.url==='/about'){
        res.end('about page')
    }
    res.end(`
      <h1>Oops!</h1>
      <p>thats on us </p>  
      <a href="/">back home</a>
        `)

    })

server.listen(5000)