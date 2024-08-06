const {readFile,writeFile}= require('fs').promises

// const util=require('util')
// const readFilePRomise=util.promisify(readFile)
// const writeFilePRomise=util.promisify(writeFile)


const start = async() =>{
    try{
    const first= await readFile('./content/first.txt','utf8')   
    const second= await readFile('./content/second.txt','utf8')
    await writeFile('./content/third.txt',`this is cool ${first} and second one is : ${second}`,{flag:'a'})

    console.log(first,second)
    }
    catch(err){
    console.log(err)
    }

}

start()

//function to read the text
// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if (err){
//                 reject(err)
//             }
//             else{
//                 resolve(data)
                
//             }
//         })

//     })
// }

// getText('./content/satva/first.txst')
// .then((result)=>{console.log(result)})
// .catch((err)=>{console.log(err)})

















