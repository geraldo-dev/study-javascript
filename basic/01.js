const readlinesync = require('node:readline');

let rl = readlinesync.createInterface(
    process.stdin, process.stdout
);

console.log('welcome this app');

rl.question('what is your name: ', (yourName) => {
    if (yourName !== 'geraldo') {
        return console.log('sorry do you is not geraldo!');
    }

    rl.question(`what are your age: `, (age) => {
        if (age >= 18) {
            console.log('you´are an adult');
        } else {
            console.log('you´are not an adult');
        }
        rl.close();
    });
});


