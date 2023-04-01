let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let set = new Set();
for(let i = 1; i <= n; i++){
  set.add(input[i]);
}
let arr = [...set];
arr.sort((a,b) => {
  if(a.length > b.length) return 1;
  if(a.length < b.length) return -1;
  if(a.length === b.length) {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a === b) return 0;
  }
})
let answer = arr.join("\n");
console.log(answer);