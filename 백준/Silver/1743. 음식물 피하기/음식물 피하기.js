let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [N, M, K] = input[0].trim().split(" ").map(Number);
let pos = [[0,1],[-1,0],[0,-1],[1,0]];
let arr = Array.from(Array(N), () => Array(M).fill('.'));

// 음식물 쓰레기 지도
for(let i = 1; i <= K; i++){
  let [x, y] = input[i].trim().split(" ").map((v) => Number(v-1));
  arr[x][y] = "#";
}
const isValid = (x, y) => {
  return 0 <= x && x < M && 0 <= y && y < N;
}
const checkMap = Array.from(Array(N), () => Array(M).fill(false));

let count = 0;
let result = [];

const dfs = (x, y) => {
  if(checkMap[y][x]) return;
  checkMap[y][x] = true;
  for(let i = 0; i < 4; i++){
    let nx = x + pos[i][0];
    let ny = y + pos[i][1];
    if(isValid(nx, ny) && !checkMap[ny][nx] && arr[ny][nx] === "#"){
      count++;
      dfs(nx, ny);
    }
  }
  return count;
}

for(let i = 0; i < N; i++){
  for(let j = 0; j < M; j++){
    if(arr[i][j] === "#" && !checkMap[i][j]){
      count = 1;
      result.push(dfs(j, i));
    }
  }
}

console.log(Math.max(...result))