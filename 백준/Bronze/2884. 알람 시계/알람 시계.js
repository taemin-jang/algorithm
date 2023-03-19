let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let [h, m] = input[0].split(" ").map(v => +v);
let sum = h * 60 + m;
let newSum = sum - 45;
if(newSum > 1440){
  newSum = newSum - 1440;
}else if(newSum < 0){
  newSum = 1440 + newSum;
}

h = Math.floor(newSum / 60);
m = newSum - (h * 60);
console.log(h, m);