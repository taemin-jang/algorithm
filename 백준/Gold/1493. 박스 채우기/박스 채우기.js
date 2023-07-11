let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [length, width, height] = input[0].split(" ").map(Number);
let tc = +input[1];
let cubes = Array(20).fill(0);
for(let i = 0; i < tc; i++) {
  let [a, b] = input[i+2].split(" ");
  cubes[a] = b;
}
const nearSet = (n) => {
  let i = 0;
  while(2 ** i <= n) i++;
  return i - 1;
}

let size = nearSet(length);
size = Math.min(size, nearSet(width));
size = Math.min(size, nearSet(height));

let used = 0;
let result = 0;

for(let i = size; i >= 0; i--){
  // 한 변의 길이가 2이므로 size가 하나 줄어들 떄마다 length, width, heigth가 각각 2씩 줄어드는 것이기 때문에 8을 곱해줌, 즉 size가 5일 때 개수가 1이라면 size가 4일때는 그 크기가 8개 있어야 5일 때 1개와 같다는 의미
  used *= 8;
  let curLength = 2 ** i; // 현재 큐브 한 변의 길이
  // 필요한 공간의 개수를 구하는 것으로 주어진 박스의 크기를 현재 큐브 한 변의 길이로 나눔으로써 필요한 개수를 알 수 있습니다. 구한 값에서 used를 빼는 것은 이전에 차지한 큐브의 개수를 빼고 남은 공간에 들어갈 수 있는 큐브의 수를 구하는 것이기 때문입니다.
  let required = Math.min(parseInt(length / curLength) * parseInt(width / curLength) * parseInt(height / curLength) - used, cubes[i]);

  result += required;
  used += required;
}
if(used === length * width * height) console.log(result);
else console.log(-1);