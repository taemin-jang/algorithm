let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N] = input[0].trim().split(" ").map(Number);
let map = [];
let pos = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
let oneArr = [];

for (let i = 1; i <= N; i++) {
  let arr = input[i].trim().split(" ").map(Number);
  map.push(arr);
  let isOne = arr.indexOf(1);
  if (isOne !== -1) {
    arr.forEach((v, idx) => {
      if (v === 1) {
        oneArr.push([i - 1, idx, 0]);
      }
    });
  }
}
const isValid = (y, x) => {
  return 0 <= y && y < N && 0 <= x && x < M;
};

const bfs = (arr) => {
  let q = arr;
  let cnt = 0;
  let index = 0;
  while (q.length !== index) {
    let [y, x, count] = q[index];
    cnt = count;
    for (let i = 0; i < 4; i++) {
      let ny = y + pos[i][0];
      let nx = x + pos[i][1];
      if (isValid(ny, nx) && map[ny][nx] === 0) {
        map[ny][nx] = 1;
        q.push([ny, nx, count + 1]);
      }
    }
    index++;
  }
  let result = map.filter((v) => v.includes(0)).length;
  console.log(result === 0 ? cnt : -1);
  return cnt;
};
bfs(oneArr);
