let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];

let map = [];
let dy = [-1, 0, 1, 0];
let dx = [0, -1, 0, 1]; // 남 서 북 동

for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split("").map(Number));
}
let chk = Array.from(Array(N).fill(false), () => Array(N).fill(false));

let count = 0;
let resultArr = [];

const isValid = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < N ? true : false;
};

const dfs = (y, x) => {
  chk[y][x] = true;
  count++;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (isValid(ny, nx) && map[ny][nx] === 1 && !chk[ny][nx]) {
      dfs(ny, nx);
    }
  }
  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !chk[i][j]) {
      resultArr.push(dfs(i, j));
      count = 0;
    }
  }
}
console.log(resultArr.length);
[...resultArr].sort((a, b) => a - b).map((v) => console.log(v));
