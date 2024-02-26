let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length- 1] < 1e9) pibo.push(pibo[pibo.length- 2] + pibo[pibo.length- 1]);

const n = input[0];
const result = []
for(let i = 1; i <= n; i++){
    let num = input[i];
    let numArr = []
    for(let j = pibo.length - 1; j >= 0; j--){
        if(num === 0) break;
        if(pibo[j] <= num){
            numArr.push(pibo[j]);
            num -= pibo[j];
        }
    }
    result.push(numArr.sort((a,b) => a - b).join(" "));
}

console.log(result.join("\n"));