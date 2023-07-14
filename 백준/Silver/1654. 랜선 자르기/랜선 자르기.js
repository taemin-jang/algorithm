let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);
let arr = input.slice(1).map(Number);

let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;

while(start <= end) {
  let mid = parseInt((start + end) / 2);
  let count = 0;
  for(let num of arr){
    count += Math.floor(num / mid);
  }
  if(count < m){
    end = mid - 1;
  }else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);