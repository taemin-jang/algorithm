let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let n = +input;

// 사자 0마리 1
// 사자 1마리 8 => n * 2
// 사자 2마리 18
// 사자 3마리 12
// 사자 4마리 2 
// n이 4일 경우 = 41
// n이 3일경우 
// 1, 6, 8, 2 = 17
// n이 2일경우
// 1, 4, 2 = 7
// n이 1일경우
// 1, 2 = 3
const dp = Array(100001).fill(0);
dp[1] = 3;
dp[2] = 7;

for(let i = 3; i <= n; i++){
    dp[i] = (dp[i-1] * 2 + dp[i-2]) % 9901;
}

console.log(dp[n]);