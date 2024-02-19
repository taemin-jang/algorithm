let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = +input[0];
i = 1;
sum = 0;
while(sum <= n) {
  sum += i;
  if(sum > n) break;
  i++;
}
console.log(i-1);