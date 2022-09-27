const readline = require("readline-sync");

// const yourName = readline.question('what is your name: ');

// if (yourName.length <= 3 ){
//     return console.log(`sorry do you name is very small "${yourName}"`);
// }

// const yourAge = Number(readline.question('what is your age : '));

// if(Number.isNaN(yourAge)){
//     return console.log('sorry only number');
// }

console.log('what is your programmation language favorite:');
console.log('(1)python\n(2)javascript\n(3)php');
const yourlanguage = Number(readline.question('enter the language number: '));

switch (yourlanguage) {
    case 1:
        console.log('you chose python')
        break;
    case 2:
        console.log('you chose javascript')
        break;
    case 3:
        console.log('you chose php')
        break;

    default:
        console.log('sorry, option invalidates')
        break;
}