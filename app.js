const _ = require('lodash')
const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)



// const names=require('./names');
// const sayHi=require('./utils');
// const data=require('./alternative')
// require('./mindgrenade')
