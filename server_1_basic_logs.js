

const http=require('http')

const server=http.createServer((res,req)=>{
    console.log('request event')
    console.log('hello world')
    
})
server.listen(5000,()=>{
    console.log('listening to port 5000')
})