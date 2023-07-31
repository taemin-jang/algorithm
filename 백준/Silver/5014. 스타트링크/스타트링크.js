let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [F, S, G, ...pos] = input[0].split(" ").map(Number);
let chk = Array(F).fill(false);

const bfs = (current, count) => {
  let q = [[current, count]];
  while (q.length) {
    let [cur, cnt] = q.shift();

    if (cur === G) {
      console.log(cnt);
      return;
    }
    for (let i = 0; i < 2; i++) {
      let move = i ? cur - pos[i] : cur + pos[i];
      if (1 <= move && move <= F && !chk[move]) {
        chk[move] = true;
        q.push([move, cnt + 1]);
      }
    }
  }
  console.log("use the stairs");
};

bfs(S, 0);
