const os = require('os');


//info about user 

const user = os.userInfo()

console.log(user)

//method returns the system uptime in seconds


console.log(`the system Uptime is ${os.uptime()} seconds`);


// αυτη η μεθοδος ειναι για να ζηταμε πληροφοριες για το λειτουργικο συστημα

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);


