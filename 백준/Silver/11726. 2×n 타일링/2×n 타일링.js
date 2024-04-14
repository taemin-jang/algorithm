let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let n = +input;

const dp = Array(1001).fill(0);
dp[1] = 1;
dp[2] = 2;
// 1 2 3 5 8 13
// dp[i] = dp[i-1] + dp[i-2]

for(let i = 3; i <= n; i++){
    dp[i] = (dp[i-1] + dp[i-2]) % 10007;
}

console.log(dp[n]);