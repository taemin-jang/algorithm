let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 카드 1개가 포함된 카드팩
// 카드 2개가 포함된 카드팩
// ...
// 카드 N개가 포함된 카드팩

let n = +input[0];
const cards = input[1].split(" ").map(Number);
const dp = Array(1001).fill(10001);
dp[0] = 0;

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        dp[i] = Math.min(dp[i], dp[i-j] + cards[j-1]);
    }
}
console.log(dp[n]);