// function solution(n, m, section) {
//     let paint = Array(n+1).fill(0).map((v,i) => section.includes(i) ? 1 : v);
//     let cnt = 0;
    
//     while(paint.includes(1)){
//         const index = paint.indexOf(1);
//         for(let j = 0; j < m; j++){
//             if(paint[index+j]) paint[index+j] = 0;
//         }
//         cnt++;
//     }
//     return cnt;
// }

function solution(n, m, section) {
  let answer = 0;
  let max = 0;
  section.forEach((s) => {
    if (s > max) {
      answer++;
      max = s + m - 1;
    }
  });
  return answer;
}