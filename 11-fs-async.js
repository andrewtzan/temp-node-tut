//async fileSystem

const {readFile,writeFile, read} = require('fs');


//δημνιουργια αρχειου με ασυγχρονο τροπο. διαχειρηση file system SOS!!!!!!!!!!!!!!!!!!!!!!!
console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',`the result is: ${first},${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done');
        })
    })
})

console.log(('starting the next task'));

