let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const T = input[0];

const dp = [];

for(let i = 1; i <= T; i++){
    dp.push(input[i]);
}

for(let i = 1; i < T; i++){
    dp[i] = Math.max(dp[i], dp[i-1] * dp[i]);
}

console.log(Math.max(...dp).toFixed(3));