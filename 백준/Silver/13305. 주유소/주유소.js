let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = +input[0];
let city = input[1].split(" ").map(Number);
let oils = input[2].split(" ").map(Number);
let minOil = oils[0];
for(let i = 0; i < oils.length; i++){
  minOil = Math.min(oils[i], minOil);
  oils[i] = minOil;
}
let result = BigInt(0);
for(let i = 0; i < oils.length - 1; i++){
  result += BigInt(oils[i]) * BigInt(city[i]);
}
console.log(String(result));