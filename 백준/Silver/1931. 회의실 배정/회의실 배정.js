let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tc = +input[0];
let arr = input.slice(1);
arr = arr.map(v => v.split(" ").map(Number)).sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
let count = 1;
let [start, end] = arr[0];
for(let i = 1; i < tc; i++){
  if(end <= arr[i][0]){
    count++;
    end = arr[i][1];
  }
}
console.log(count);