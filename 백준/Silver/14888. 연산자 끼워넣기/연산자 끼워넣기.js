let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];
let arr = input[1].trim().split(" ").map(Number);
let operator = input[2].trim().split(" ").map(Number);
let obj = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "%": (a, b) => +String(a / b).split(".")[0],
};
let operatorArr = [];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < operator[i]; j++) {
    switch (i) {
      case 0:
        operatorArr.push("+");
        break;
      case 1:
        operatorArr.push("-");
        break;
      case 2:
        operatorArr.push("*");
        break;
      default:
        operatorArr.push("%");
        break;
    }
  }
}
let op = new Set(permutation(operatorArr, operatorArr.length));
let result = new Set();
function permutation(arr, num) {
  let result = [];
  if (num === 1) return arr;

  arr.forEach((v, i, origin) => {
    let restArr = origin.filter((value, index) => index !== i);
    let permuArr = permutation(restArr, num - 1);
    let arr = permuArr.map((val) => v + val);
    result.push(...arr);
  });
  return result;
}
for (let oper of [...op]) {
  let str = oper.split("");
  result.add(arr.reduce((acc, cur, i, origin) => obj[str[i - 1]](acc, cur)));
}
console.log(Math.max(...result));
console.log(Math.min(...result));
