let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].trim().split(" ").map(Number);
let chk = Array(100001).fill(false);
const getFastestFindTime = (start, end) => {
  const queue = [[start, 0]];
  while (queue.length) {
    const [pos, time] = queue.shift();
    if (chk[pos]) continue;
    if (pos === end) return time;
    for (const move of [pos + 1, pos - 1, pos * 2]) {
      !chk[move] && move >= 0 && move <= 100000 && queue.push([move, time + 1]);
    }
    chk[pos] = 1;
  }
};

console.log(getFastestFindTime(N, K));
