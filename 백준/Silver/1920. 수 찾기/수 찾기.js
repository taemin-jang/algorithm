let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let nArr = input[1].split(" ").map(Number).sort((a,b) => a- b);
let m = +input[2];
let mArr = input[3].split(" ").map(Number);
let result = [];
const bst = (arr, target, start, end) => {
  let check = false;
  while(start <= end) {
    let mid = parseInt((start + end) / 2);
    if(target < arr[mid]) end = mid-1;
    else if(target > arr[mid]) start = mid + 1;
    else {
      check = true; 
      break;
    }
  }
  check ? result.push(1) : result.push(0);
}

mArr.forEach(v => {
  bst(nArr, v, 0, n-1);
})

console.log(result.join("\n"))