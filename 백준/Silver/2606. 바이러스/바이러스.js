let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0];
let M = +input[1];

let map = Array.from(Array(N), () => Array());
let chk = Array.from(Array(N), () => Array(N).fill(false));

for (let i = 2; i < input.length; i++) {
  let [l, r] = input[i].trim().split(" ").map(Number);
  map[l - 1].push(r - 1);
  map[r - 1].push(l - 1);
}

const bfs = () => {
  let q = [0];
  let result = new Set();
  while (q.length) {
    let i = q.shift();
    if (map[i].length) {
      for (let j of map[i]) {
        if (!chk[i][j]) {
          chk[i][j] = true;
          chk[j][i] = true;
          result.add(j);

          q.push(j);
        }
      }
    }
  }
  console.log(result.size);
};
bfs();
