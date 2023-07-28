let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [M, N, K] = input[0].split(" ").map(Number);

let dy = [-1, 0, 1, 0];
let dx = [0, -1, 0, 1]; // 남 서 북 동
// 2차원 배열 생성
let map = Array.from(Array(M), () => Array(N).fill(0));

// 주어진 좌표의 영역을 1로 표시
for (let i = 1; i <= K; i++) {
  let [lx, ly, rx, ry] = input[i].trim().split(" ").map(Number);
  for (let x = lx; x < rx; x++) {
    for (let y = ly; y < ry; y++) {
      map[y][x] = 1;
    }
  }
}
map.reverse(); // 2차원 배열의 (0, 0)의 위치는 좌측 상단이지만, 주어진 문제는 좌측 하단이므로 뒤집어 줌.
let chk = Array.from(Array(M), () => Array(N).fill(false));
let count = 0;
let resultArr = [];

// 직사각형 범위 확인
const isValid = (y, x) => {
  return 0 <= y && y < M && 0 <= x && x < N ? true : false;
};

const dfs = (y, x) => {
  chk[y][x] = true;
  count++;
  for (let i = 0; i < 4; i++) {
    let ny = y + dy[i];
    let nx = x + dx[i];
    if (isValid(ny, nx) && !chk[ny][nx] && map[ny][nx] === 0) {
      dfs(ny, nx);
    }
  }
  return count;
};

// 전체를 순회하면서 map이 0이면서 아직 방문하지 않은 곳을 dfs 돌려준다.
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!chk[i][j] && map[i][j] === 0) {
      resultArr.push(dfs(i, j));
      count = 0;
    }
  }
}
console.log(resultArr.length);
console.log(resultArr.sort((a, b) => a - b).join(" "));
