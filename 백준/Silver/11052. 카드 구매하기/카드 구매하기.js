let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

// 카드 1개가 포함된 카드팩
// 카드 2개가 포함된 카드팩
// ...
// 카드 N개가 포함된 카드팩

// 비싼 카드팩 => 높은 등급의 카드
// 카드팩 개수를 조합해 N개의 카드를 구매하기 위한 가장 큰 금액을 지불할 수 있는 값 출력

let n = +input[0];
const cards = input[1].split(" ").map(Number);
const dp = Array(1001).fill(0);

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        dp[i] = Math.max(dp[i], dp[i-j] + cards[j-1]);
    }
}
console.log(dp[n]);