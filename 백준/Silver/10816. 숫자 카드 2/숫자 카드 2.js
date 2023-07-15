let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = +input[0];
let nArr = input[1].split(" ").map(Number).sort((a,b) => a - b);
let m = +input[2];
let mArr = input[3].split(" ").map(Number);
let len = nArr.length - 1;

const lowerBound = (arr, target, start, end) => {
  while(start < end) {
    let mid = parseInt((start + end) / 2);
    if(target <= arr[mid]) end = mid;
    else start = mid + 1;
  }
  return end
}

const upperBound = (arr, target, start, end) => {
  while(start < end) {
    let mid = parseInt((start + end) / 2);
    if(target < arr[mid]) end = mid;
    else start = mid + 1;
  }
  return end
}

const count = (arr, value) => {
  let right = upperBound(arr, value, 0, arr.length);
  let left = lowerBound(arr, value, 0, arr.length);
  // console.log(arr, value, right, left)
  return right - left;
};

console.log(mArr.map(v => count(nArr, v)).join(" "));