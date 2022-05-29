var studentInfo = require ('./information.js');
console.log(`Hi, my name is ${studentInfo.name} and I'm studying from ${studentInfo.campus}`);

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hi, I'm ${studentInfo.name}, I study in ${studentInfo.campus}`,
    e : "oO",
    T : "U "
}));