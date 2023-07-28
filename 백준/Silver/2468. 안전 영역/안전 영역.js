let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];
let dy = [-1, 0, 1, 0];
let dx = [0, -1, 0, 1]; // 남 서 북 동

let map = [];
let max = 0;
for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split(" ").map(Number));
  max = Math.max(max, ...map[i - 1]);
}

const isValid = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < N;
};

const dfs = (y, x, k, chk, count) => {
  chk[y][x] = true;
  count++;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (isValid(ny, nx) && !chk[ny][nx] && map[ny][nx] > k) {
      dfs(ny, nx, k, chk, count);
    }
  }
  return count;
};

let resultArr = [];
for (let k = max; k >= 0; k--) {
  let chk = Array.from(Array(N), () => Array(N).fill(false));
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!chk[i][j] && map[i][j] > k) {
        dfs(i, j, k, chk, cnt);
        cnt++;
      }
    }
  }
  resultArr.push(cnt);
}

console.log(Math.max(...resultArr));