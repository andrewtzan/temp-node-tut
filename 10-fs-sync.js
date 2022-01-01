//sync file system(fs)


const {readFileSync,writeFileSync} = require('fs');

console.log('start');

//διαβαζει αρχειο

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

//δημιουργει αρχειο

writeFileSync('./content/result-sync.txt',`the result is: ${first},${second}`,{flag:'a'});

console.log('done with this task');
console.log('starting thw next one');
