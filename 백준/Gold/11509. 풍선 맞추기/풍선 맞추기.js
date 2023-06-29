let fs = require("fs");
input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tc = +input[0];
let balloons = input[1].split(" ").map(Number);
let arr = Array(1000001).fill(0);
let arrow = 0;
for(let balloon of balloons){
  if(arr[balloon]){
    arr[balloon]--;
    arr[balloon - 1]++;
  }else{
    arrow++;
    arr[balloon - 1]++;
  }
}
console.log(arrow);