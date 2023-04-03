let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let obj = {};
let set = [...new Set(arr)].sort((a,b) => a-b).map((v,i) => obj[v] = i);
let result = arr.map(v => obj[v]);
console.log(result.join(" "));