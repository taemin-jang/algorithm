const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);
const queens = [];
let count = 0;

function possible(x, y) {
  for (const [a, b] of queens) {
    // 행과 열 확인
    if (a === x || b === y) return false;
    // 대각선 확인
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

function dfs(row) {
  if (row === n) {
    count++;
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);

console.log(count);
