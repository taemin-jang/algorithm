let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let arr = [];
for(let i = 1; i <= n; i++){
  let [x,y] = input[i].split(" ");
  arr.push({"x" : +x, "y" : +y});
}
arr.sort((a,b) => {
  if(a["x"]>b["x"]) return 1;
  if(a["x"]<b["x"]) return -1;
  if(a["x"] === b["x"]) {
    if(a["y"]>b["y"]) return 1;
    if(a["y"]<b["y"]) return -1;
    if(a["y"]===b["y"]) return 0;
  }
})
let answer = "";
for(let i = 0; i < n; i++){
  answer += arr[i]["x"] + " " + arr[i]["y"] + "\n";
}
console.log(answer);