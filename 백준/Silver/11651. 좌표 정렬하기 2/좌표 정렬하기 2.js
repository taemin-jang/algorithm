let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++){
  let [x,y] = input[i].split(" ");
  arr.push({"x" : +x, "y" : +y});
}
arr.sort((a,b) => a["y"] !== b["y"] ? a["y"] - b["y"] : a["x"] - b["x"])
let answer = "";
for(let i = 0; i < n; i++){
  answer += arr[i]["x"] + " " + arr[i]["y"] + "\n";
}
console.log(answer);