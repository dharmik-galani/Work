const fs = require('fs');
fs.writeFile("hey.txt","hello how are you!",function (err){
    if(err)
        console.log(err);else
        console.log("File created successfully");
})
fs.appendFile("hey.txt","\n I am fine",function (err){
    if(err)
        console.log(err);else
        console.log("File created successfully");
})
fs.copyFile("hey.txt","./copy/new.txt",function (err){
    if(err)
        console.log(err);else
        console.log("File created successfully");
})
fs.unlink("hey.txt",function (err){
    if(err)
        console.log(err);else
        console.log("File deleted successfully");
})
console.log("hello world..");
