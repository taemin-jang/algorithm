let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let map = [];
let pos = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];
let set = new Set();
for (let i = 0; i < 5; i++) {
  map.push(input[i].trim().split(" "));
}

const isValid = (y, x) => {
  return 0 <= y && y < 5 && 0 <= x && x < 5;
};

const dfs = (y, x, num) => {
  if (num.length === 6) return set.add(+num);
  for (let i = 0; i < 4; i++) {
    let ny = y + pos[i][0];
    let nx = x + pos[i][1];
    if (isValid(ny, nx)) {
      dfs(ny, nx, num + map[ny][nx]);
    }
  }
};

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, "");
  }
}
console.log(set.size);
