let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = +input[0];
const newArr = input.slice(1).map(arr => arr.split(" ").map(Number)).sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
let count = 1;
let [start, end] = newArr[0];

for(let i = 1; i < n; i++) {
    if(end <= newArr[i][0]){
        end = newArr[i][1];
        count++;
    }
}

console.log(count);