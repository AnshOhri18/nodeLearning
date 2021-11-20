// BUILT IN MODULES
// 1. OS (operating system)

const os = require('os')

//now we use certain features of the built in module os

//info about current user
const user = os.userInfo()
console.log(user);

//returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}
console.log(currentOS);
