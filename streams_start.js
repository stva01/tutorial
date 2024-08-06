const {createReadStream} = require ('fs');

const stream = createReadStream('./contenst/first.txt');
stream.on('data',(result)=>{
    console.log(result);

})
stream.on('error',(err)=>{
    console.log('bhai kuch toh hag diye ')
})