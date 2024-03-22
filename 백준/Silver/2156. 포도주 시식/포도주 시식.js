let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const N = input[0];

const d = new Array(10001).fill(0);
d[0] = input[1]; // 6
d[1] = d[0] + input[2]; // 16
d[2] = Math.max(input[1] + input[2], input[1] + input[3], input[2] + input[3]); // 16 19 23
for(let i = 3; i < N; i++){
    d[i] = d[i-1];
    d[i] = Math.max(d[i], d[i-2] + input[i+1]);
    d[i] = Math.max(d[i], d[i-3] + input[i+1] + input[i]);
}

console.log(d[N-1]);