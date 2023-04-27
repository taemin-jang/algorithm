const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line].map(v => v.charCodeAt() < 97 ? v.toLowerCase() : v.toUpperCase());
}).on('close',function(){
    console.log(input.join(''));
});