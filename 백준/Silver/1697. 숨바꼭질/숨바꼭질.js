let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].trim().split(" ").map(Number);
let chk = Array(100001).fill(false);
const bfs = (n, t) => {
  let q = [];
  q.push([n, t]);
  while (q.length) {
    let [pos, time] = q.shift();
    if (chk[pos]) continue;
    if (pos === K) return time;
    for (let nx of [pos - 1, pos + 1, pos * 2]) {
      if (nx >= 0 && nx <= 100000 && chk[nx] === false) {
        q.push([nx, time + 1]);
      }
    }
    chk[pos] = true;
  }
};
console.log(bfs(N, 0));
