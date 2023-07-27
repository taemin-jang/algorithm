let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, S] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let result = 0;
const recursion = (num, sum) => {
  if (num === N) return;

  sum += arr[num];
  if (sum === S) result++;

  recursion(num + 1, sum);
  recursion(num + 1, sum - arr[num]);
};

recursion(0, 0);
console.log(result);
