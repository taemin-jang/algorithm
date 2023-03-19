const file =
  process.platform === "linux" ? "/dev/stdin" : "./y22/BaekJoon/input.txt";

const input = require("fs").readFileSync(file).toString().trim().split("\n");

// input[0] 과목만큼 점수를 score에 넣어주기
const score = input[1]
  .split(" ")
  .map((el) => Number(el))
  .filter((el, i) => i < input[0]);

// new_score는 새로운 계산 방법으로 사용한 점수를 넣는 변수
let new_score = [];

// 최댓값 구하기
score.sort((a, b) => a - b);
// 정렬 후 제일 마지막에 있는 변수가 최댓값
const M = score[input[0] - 1];

// 새로운 계산 방법으로 성적을 계산후 new_score에 다시 넣어줌
score.forEach((num) => new_score.push((num / M) * 100));

// 새로운 성적의 평균 구하기
let sum = 0;
new_score.forEach((score, idx) => {
  sum += score;
  if (idx === new_score.length - 1) {
    console.log(Number(sum / input[0]));
  }
});