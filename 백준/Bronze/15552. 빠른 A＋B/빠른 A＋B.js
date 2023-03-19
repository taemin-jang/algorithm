const input = require("fs").readFileSync(0).toString().trim().split("\n");
let answer = "";
for (let i = 1; i <= input[0]; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}
console.log(answer);