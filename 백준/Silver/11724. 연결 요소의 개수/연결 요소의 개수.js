let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].trim().split(" ").map(Number);
let adjM = Array.from(Array(N), () => Array(N).fill(0));

for (let i = 1; i <= M; i++) {
  let [u, v] = input[i]
    .trim()
    .split(" ")
    .map((v) => Number(v - 1));
  adjM[u][v] = 1;
  adjM[v][u] = 1;
}
let chk = Array(N).fill(false);
let result = 0;

const dfs = (num) => {
  for (let i = 0; i < N; i++) {
    if (adjM[num][i] && !chk[i]) {
      chk[i] = true;
      dfs(i);
    }
  }
};

for (let i = 0; i < N; i++) {
  if (!chk[i]) {
    chk[i] = true;
    result++;
    dfs(i);
  }
}

console.log(result);
