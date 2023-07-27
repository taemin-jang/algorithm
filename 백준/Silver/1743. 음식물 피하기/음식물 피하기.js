let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, K] = input[0].split(" ").map(Number);

let map = Array.from(Array(N).fill("."), () => Array(M).fill("."));
let dy = [-1, 0, 1, 0];
let dx = [0, -1, 0, 1]; // 남 서 북 동

for (let i = 1; i <= K; i++) {
  let [n, m] = input[i].split(" ").map(Number);
  map[n - 1][m - 1] = "#";
}

let chk = Array.from(Array(N).fill(false), () => Array(M).fill(false));
let count = 1;
let max = 0;

const isValid = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < M ? true : false;
};

const dfs = (y, x) => {
  chk[y][x] = true;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (isValid(ny, nx) && map[ny][nx] === "#" && !chk[ny][nx]) {
      count++;
      dfs(ny, nx);
    }
  }
  max = count > max ? count : max;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "#") {
      dfs(i, j);
      count = 1;
    }
  }
}
console.log(max);