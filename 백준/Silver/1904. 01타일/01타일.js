let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const N = +input;

const d = new Array(1000000).fill(0);
d[0] = 1;
d[1] = 2;
for(let i = 2; i < N; i++){
    d[i] = (d[i-1] + d[i-2]) % 15746;
}

console.log(d[N-1]);