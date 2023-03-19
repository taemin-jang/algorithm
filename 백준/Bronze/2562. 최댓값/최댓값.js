let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let max = 0;
let cnt = 0;
input = input.map(v => +v);
for(let i = 0; i < input.length; i++){
  if(input[i] > max){
    max = input[i];
    cnt = i+1;
  }
}
console.log(max + "\n" + cnt);