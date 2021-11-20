const path = require('path');

console.log(path.sep); // the seperator among our files

// no need to learn. just access the documentation and see the functions
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)