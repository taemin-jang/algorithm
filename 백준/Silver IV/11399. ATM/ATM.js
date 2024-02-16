let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sortedArr = input[1].split(" ").map(Number).sort((a,b) => a - b);
let sum = 0;
let count = 0;
sortedArr.forEach(v => {
  sum += v;
  count += sum;
})

console.log(count);