let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let t = +input[0];
let queue = [];
let result = [];
for(let i = 1; i <= t * 3; i+=3){
  let func = input[i].split("");
  queue = JSON.parse(input[i+2]);
  let reverse = false;
  let isError = false;
  let startIndex = 0;
  let lastIndex = queue.length - 1;
  for(let v of func) {
    if(v === 'R') {
        reverse = !reverse;
    }else{
      if(startIndex > lastIndex){
        isError = true;
        break;
      }
      if(reverse){
        lastIndex--;
      }else {
        startIndex++;
      }
    } 
  }
  if(!isError) result.push(JSON.stringify(reverse ? queue.slice(startIndex, lastIndex + 1).reverse() : queue.slice(startIndex, lastIndex + 1)));
  else result.push('error');
}

console.log(result.join("\n"));

