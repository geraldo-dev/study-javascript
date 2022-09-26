const readlinesync = require('node:readline');

let rl = readlinesync.createInterface(
    process.stdin, process.stdout
);

rl.question('what is your name: ', (yourName) => {
    console.log('sorry do you is not geraldo!');
    rl.close();
});


