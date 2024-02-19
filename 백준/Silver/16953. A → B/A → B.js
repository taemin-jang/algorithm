let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let [a, b] = input.map(Number);
let count = 1;
while(a < b){
  if(b % 10 === 1) {
    b = Math.floor(b / 10);
    count++;
  }else if(b % 2 === 0){
    b = b / 2;
    count++;
  }else break;
}

if(a === b) console.log(count);
else console.log(-1);