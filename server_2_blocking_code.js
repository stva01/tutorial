const http = require('http')
const { url } = require('inspector')
const server =http.createServer((req,res)=>{

    if (req.url === '/'){
        res.end('home page')
        
    }

    else if (req.url === '/about'){
        //BLOCKING CODE !!!
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log(i,j)
            
            }    
        }
        res.end('about page')
    }    
    

})

server.listen(5000,()=>{
    console.log(`server is listenin on port 5000`)
})