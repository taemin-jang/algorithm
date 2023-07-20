let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let k = +input[0];
let stack = [];

for(let i = 1; i <= k; i++){
  let num = +input[i]
  if(num !== 0){
    stack.push(num);
  }else{
    stack.pop();
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));