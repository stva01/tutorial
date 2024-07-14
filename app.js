const {readFile,writeFile}=require('fs')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    
})




// const names=require('./names');
// const sayHi=require('./utils');
// const data=require('./alternative')
// require('./mindgrenade')
