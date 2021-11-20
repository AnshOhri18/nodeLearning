// 1. const fs = require('fs');
// fs.readFileSync(); 

const { readFileSync, writeFileSync } = require('fs') // same as 1 just lets us skip a step
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8') // reads data in file 

writeFileSync( // writes passed data in file passed
  './content/result-sync.txt', // if file do not exit already it creates one in the given path
  `Here is the result : ${first}, ${second} `,
  { flag: 'a' } // this appends in the file. otherwise by default writeFileSyn overwrites the data in file
)
console.log('done with this task')
console.log('starting the next one')