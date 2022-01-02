const {readFile} = require('fs');

console.log(`let's start the first task`);

//CHECK THE FILE PATH

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log('task complete');
})
console.log('starting next task');