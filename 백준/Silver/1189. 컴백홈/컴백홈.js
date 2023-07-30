let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [R, C, K] = input[0].split(" ").map(Number);
let pos = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
]; // 동 남 서 북
let map = [];
let chk = Array.from(Array(R), () => Array(C).fill(0));
for (let i = 1; i <= R; i++) {
  map.push(input[i].trim().split(""));
}
map.reverse();
const isValid = (y, x) => {
  return 0 <= y && y < R && 0 <= x && x < C;
};
let result = 0;
const dfs = (index, y, x) => {
  if (y === R - 1 && x === C - 1 && index === K) {
    result++;
    return;
  }
  if (index <= K) {
    for (let i = 0; i < 4; i++) {
      let ny = y + pos[i][0];
      let nx = x + pos[i][1];
      if (isValid(ny, nx) && map[ny][nx] !== "T" && !chk[ny][nx]) {
        chk[ny][nx] = 1;
        dfs(index + 1, ny, nx);
        chk[ny][nx] = 0;
      }
    }
  }
};
chk[0][0] = 1;
dfs(1, 0, 0);
console.log(result);
