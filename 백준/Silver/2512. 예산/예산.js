let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(" ").map(Number);
const total = +input[2];
let start = 1;
let end = Math.max(...arr);
let result = 0;
while(start <= end){
    const mid = parseInt((start + end) / 2);
    const arrTotal = arr.reduce((acc, cur) => acc + Math.min(cur, mid), 0);
    if(arrTotal <= total) {
        result = mid;
        start = mid + 1;
    }else {
        end = mid - 1;
    }
}

console.log(result);