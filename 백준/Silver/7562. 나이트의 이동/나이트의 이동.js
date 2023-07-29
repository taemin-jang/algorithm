let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let TC = +input[0];

let lenArr = [];
let currentArr = [];
let targetArr = [];

const isValid = (arr, i) => {
  return 0 <= arr[0] && arr[0] < lenArr[i] && 0 <= arr[1] && arr[1] < lenArr[i];
};

const bfs = (chk, index) => {
  let q = [];
  q.push([...currentArr[index], 0]);
  while (q.length) {
    let [y, x, count] = q.shift();
    if (JSON.stringify([y, x]) === JSON.stringify(targetArr[index]))
      return count;
    if (chk[y][x]) continue;
    let posArr = [
      [y + 1, x - 2], // 좌측 상단 1
      [y + 2, x - 1], // 좌측 상단 2
      [y + 2, x + 1], // 우측 상단 1
      [y + 1, x + 2], // 우측 상단 2
      [y - 1, x + 2], // 우측 하단 1
      [y - 2, x + 1], // 우측 하단 2
      [y - 2, x - 1], // 좌측 하단 1
      [y - 1, x - 2], // 좌측 하단 2
    ];
    for (let pos of posArr) {
      if (isValid(pos, index) && !chk[pos[0]][pos[1]]) {
        q.push([...pos, count + 1]);
      }
    }
    chk[y][x] = true;
  }
};

for (let i = 1; i <= TC; i++) {
  for (let j = 1 + (i - 1) * 3; j <= i * 3; j++) {
    switch (j % 3) {
      case 0:
        targetArr.push(input[j].trim().split(" ").map(Number));
        break;
      case 1:
        lenArr.push(+input[j].trim());
        break;
      case 2:
        currentArr.push(input[j].trim().split(" ").map(Number));
        break;
    }
  }
  let chk = Array.from(Array(lenArr[i - 1]), () =>
    Array(lenArr[i - 1]).fill(false)
  );
  console.log(bfs(chk, i - 1));
}
