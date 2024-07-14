const {readFileSync,writeFileSync}=require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//console.log(first,second)
writeFileSync('./content/result-sync.txt',`here is the result: ${first},and this is the scond : ${second}`,{flag:'a'})










// const names=require('./names');
// const sayHi=require('./utils');
// const data=require('./alternative')
// require('./mindgrenade')
