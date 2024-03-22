let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const N = input[0];
const M = input[1];

const arr = Array.from({length: N}, (_,i) => i+1);
const dp = new Array(41).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
const res = [];
let start = 0;

for(let i = 2; i < 2+M; i++){
    end = input[i];
    res.push(end - 1 - start);
    start = end;
}
res.push(N - start);

const fibo = (n) => {
    if(dp[n] !== 0) return dp[n];
    dp[n] = fibo(n-2) + fibo(n-1);
    return dp[n];
}

let result = 1;

for(let v of res) {
    result *= fibo(v);  
}

console.log(result);