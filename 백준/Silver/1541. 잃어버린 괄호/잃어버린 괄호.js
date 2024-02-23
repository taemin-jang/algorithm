let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('-');

input.forEach((v,i) => {
  let num = v.split("+");

  if(num.length >= 2){
    input[i] = +num.reduce((acc, cur) => acc + +cur,0);
  }else{
    input[i] = +num[0];
  }
})

console.log(input.reduce((acc, cur) => acc - cur, input[0] * 2));