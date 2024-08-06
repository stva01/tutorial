var fs= require('fs');
var http=require('http')

http.createServer(function(req,res){
const fileStream=fs.createReadStream('./content/first.txt')
fileStream.on('open',(result)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
        // Pipe the file stream to the response
        fileStream.pipe(res)
    console.log(`success`)

})
fileStream.on('error',(err)=>{
    console.log('kuch toh hage bhai')
})
}).listen(5000)