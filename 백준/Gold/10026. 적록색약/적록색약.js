let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];
let map = [];
let colorMap = [];
let pos = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
let colorChk = Array.from(Array(N), () => Array(N).fill(false)); // 적록색약 있는 사람
let chk = Array.from(Array(N), () => Array(N).fill(false)); // 색약 없는 사람

for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split(""));
  colorMap.push(input[i].trim().replace(/G/g, "R").split(""));
}
const isValid = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < N;
};

const dfs = (y, x, color, isWeak) => {
  for (let i = 0; i < 4; i++) {
    let ny = y + pos[i][0];
    let nx = x + pos[i][1];
    if (isWeak) {
      if (isValid(ny, nx) && !colorChk[ny][nx] && colorMap[ny][nx] === color) {
        colorChk[ny][nx] = true;
        dfs(ny, nx, color, true);
      }
    } else {
      if (isValid(ny, nx) && !chk[ny][nx] && map[ny][nx] === color) {
        chk[ny][nx] = true;
        dfs(ny, nx, color, false);
      }
    }
  }
};
let result = [0, 0];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!chk[i][j]) {
      result[0]++;
      chk[i][j] = true;
      dfs(i, j, map[i][j], false);
    }
    if (!colorChk[i][j]) {
      result[1]++;
      colorChk[i][j] = true;
      dfs(i, j, colorMap[i][j], true);
    }
  }
}

console.log(result.join(" "));
