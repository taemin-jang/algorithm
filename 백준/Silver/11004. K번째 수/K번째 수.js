let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, index] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);
nums.sort(function(a,b){
  return a - b;
})

console.log(nums[index-1]);