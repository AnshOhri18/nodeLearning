/*
Global variables ->

There is no window in node as there is no browser

some of the globals are->

1. __dirname - It gives the path of the current directory.
2. __filename - It gives the file name.
3. require - function to use modules (CommandJS)
4. module - info about current module
5. process - info about environment where the programm is being executed
6. setInterval - keeps performing a task within it after fixed intervals

*/

console.log(__dirname);
setInterval(() =>{
    console.log('hello world')
},1000)