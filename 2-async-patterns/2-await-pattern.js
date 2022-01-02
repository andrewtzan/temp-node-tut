const {readFile,writeFile} = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path');
const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)





// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err){
//                 reject(err);
//                 return;
//             }else{
//                 resolve(data);
//             }
//         })

//     })
// }



// getText('./content/first.txt').then((result)=>console.log(result)).catch((err)=>console.log(err));

const start = async()=>{
    try {
        const first = await readFilePromise('./content/first.txt','utf-8')
        const second = await readFilePromise('./content/second.txt','utf-8')
        await writeFilePromise('./content/result-1-and-2.txt',`the result of first and second : ${first},${second}`,{flag:'a'})
        console.log(first,second);
       
        
    } catch (error) {
        console.log(error);
        
    }
    
}

start()






