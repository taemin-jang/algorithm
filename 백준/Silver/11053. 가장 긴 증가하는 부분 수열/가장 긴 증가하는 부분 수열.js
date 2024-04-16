let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const dp = Array(1001).fill(1);

for(let i = 1; i <= n; i++){
    for(let j=0; j <i; j++){
        if(arr[j] < arr[i]){
            dp[i] = Math.max(dp[i], dp[j] + 1);   
        }
    }
}
console.log(Math.max(...dp));