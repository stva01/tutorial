const os = require('os')
const { uptime } = require('process')
//info about current user 
const user=os.userInfo()
console.log(user)
// method returns system uptime in seconds 
console.log(os.uptime())

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs)