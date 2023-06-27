let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = +input[0];
let line = 1;
let result = [];
let arr = [];
for(let i = 0; i < T; i++){
  let n = +input[line];
  for(let j = line + 1; j <= line + n; j++){
    let [x, y] = input[j].split(" ").map(Number);
    arr.push([x,y]);
  }
  arr = arr.sort((a,b) => a[0] - b[0]);
  let min = 0;
  let count = 0;
  arr.forEach((v,i) => {
    let [x, y] = v;
    if(min === 0) {
      min = y;
      count++;
    }
    else if(min > y) {
      min = y;
      count++
    }
  })
  line += n + 1;
  arr = [];
  result.push(count);
}

console.log(result.join("\n"));