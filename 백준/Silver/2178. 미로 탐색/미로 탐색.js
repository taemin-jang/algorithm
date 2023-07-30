let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].trim().split(" ").map(Number);
let map = [];
let pos = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
let chk = Array.from(Array(N), () => Array(M).fill(false));
for (let i = 1; i <= N; i++) {
  map.push(input[i].trim().split(""));
}

const isValid = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < M;
};

const bfs = (y, x) => {
  let q = [];
  q.push([y, x, 1]);
  while (q.length) {
    let [cy, cx, count] = q.shift();
    if (cy === N - 1 && cx === M - 1) {
      console.log(count);
      return;
    }
    for (let i = 0; i < 4; i++) {
      let ny = cy + pos[i][0];
      let nx = cx + pos[i][1];
      if (isValid(ny, nx) && !chk[ny][nx] && map[ny][nx] === "1") {
        chk[ny][nx] = true;
        q.push([ny, nx, count + 1]);
      }
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (!chk[i][j] && map[i][j] === "1") {
      bfs(i, j);
    }
  }
}
