let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let T = +input[0];
let city = input[1].split(" ").map(Number);
let oils = input[2].split(" ").slice(0, input[2].split(" ").length - 1).map(Number);

let restDistance = city.reduce((acc, cur) => acc + cur,0);
let minOil = Math.min(...oils);
let result = BigInt(0);
let i = 0;
let o = BigInt(10001);
for(let oil of oils){
  if(oil < o){
    result += BigInt(oil) * BigInt(city[i]);
    o = BigInt(oil);
  }else{
    result += BigInt(o) * BigInt(city[i]);
  }
    i++;
}
console.log(String(result));