const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input[0]);
const [targetA, targetB] = input[1].trim().split(" ").map(Number);
const m = +input[2];
const arr = Array.from(Array(n), () => Array(n).fill(0));
const visited = Array(n).fill(false);
let result = 0;
for (let i = 3; i < m + 3; i++) {
  const [A, B] = input[i]
    .trim()
    .split(" ")
    .map((v) => Number(v - 1));
  arr[A][B] = 1;
  arr[B][A] = 1;
}

const bfs = (row, count) => {
  if (row === targetB - 1) {
    result = count;
    return;
  }
  visited[row] = true;
  for (let i = 0; i < n; i++) {
    if (arr[row][i] && !visited[i]) {
      bfs(i, count + 1);
    }
  }
};

bfs(targetA - 1, 0);
console.log(result ? result : -1);
