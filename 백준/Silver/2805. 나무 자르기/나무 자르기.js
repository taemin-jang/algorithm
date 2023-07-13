let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a,b));

let result = 0;

while(start <= end){
  let mid = parseInt((start + end) / 2);
  let total = 0;
  for(let x of arr) {
    total += mid < x ? x - mid : 0;
  }
  if(total < m) {
    end = mid - 1;
  }else{
    result = mid;
    start = mid + 1;
  }
}

console.log(result);