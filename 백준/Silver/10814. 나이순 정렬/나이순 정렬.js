let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++){
  arr.push(input[i]);
}
console.log(arr.sort((a,b) => {
  let ae = a.split(" ")[0];
  let be = b.split(" ")[0];
  return ae - be;
}).join("\n"));