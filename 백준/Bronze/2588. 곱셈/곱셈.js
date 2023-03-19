let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let a = input[0];
let b = input[1].split("").reverse();
let sum = 0;

b.forEach((v,i) => {
  sum += a * v * Math.pow(10,i);
  console.log(a * v);
})

console.log(sum);
