const readline = require("readline-sync");

const yourName = readline.question('what is your name: ');

if (yourName.length <= 3 ){
    return console.log(`sorry do you name is very small "${yourName}"`);
}

const yourAge = Number(readline.question('what is your age : '));

if(Number.isNaN(yourAge)){
    return console.log('sorry only number');
}
