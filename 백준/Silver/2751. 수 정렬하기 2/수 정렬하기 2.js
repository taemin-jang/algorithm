let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(v => +v);
let arr = [];
for(let i = 1; i <= input[0]; i++){
  arr.push(input[i]);
}
arr.sort(function(a,b){
  return a - b;
})

let answer = arr.join("\n");
console.log(answer);