let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// y, x, z 남, 서, 북, 동, 하, 상
let dy = [-1, 0, 1, 0, 0, 0];
let dx = [0, -1, 0, 1, 0, 0];
let dz = [0, 0, 0, 0, -1, 1];
let [L, R, C] = [0, 0, 0];
let count;
let result = [];
const isValid = (z, y, x) => {
  return 0 <= z && z < L && 0 <= y && y < R && 0 <= x && x < C;
};

const bfs = (z, y, x, check, map) => {
  let q = [];
  q.push([z, y, x, 0]);
  while (q.length) {
    let [cz, cy, cx, cnt] = q.shift();
    if (map[cz][cy][cx] === "E") {
      count = cnt;
      return;
    }

    for (let i = 0; i < 6; i++) {
      let nz = cz + dz[i];
      let ny = cy + dy[i];
      let nx = cx + dx[i];
      if (
        isValid(nz, ny, nx) &&
        !check[nz][ny][nx] &&
        map[nz][ny][nx] !== "#"
      ) {
        check[nz][ny][nx] = true;
        q.push([nz, ny, nx, cnt + 1]);
      }
    }
  }
};

let i = 0;
let temp = 0;
while (input[i] !== "0 0 0") {
  [L, R, C] = input[i].trim().split(" ").map(Number);
  let len = input[i].trim().split(" ").length;
  let map = [];
  count = 0;
  let chk = Array.from(Array(L), () =>
    Array.from(Array(R), () => Array(C).fill(false))
  );
  let start;
  temp++;
  if (len === 3) {
    for (let k = 0; k < L; k++) {
      let row = [];
      for (let j = i + 1, t = 0; j < temp + R + 1; i++, j++, t++) {
        row.push(input[j].trim().split(""));
        let isStart = input[j].trim().split("").indexOf("S");
        if (isStart !== -1) {
          start = [k, t, isStart]; // 시작 위치
        }
      }
      map.push(row);
      temp = i + 1;
    }
  }
  chk[start[0]][start[1]][start[2]] = true;
  bfs(start[0], start[1], start[2], chk, map);
  if (count) result.push(`Escaped in ${count} minute(s).`);
  else result.push("Trapped!");
  i++;
}
console.log(result.join("\n"));
