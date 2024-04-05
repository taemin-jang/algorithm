let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const k = +input[0];
const arr = input[1].split(" ");
const visit = new Array(10).fill(0);
let max = String(Number.MIN_SAFE_INTEGER);
let min = String(Number.MAX_SAFE_INTEGER);


const dfs = (e, num, result) => {
    if(e === k){
        min = min > result ? result : min;
        max = max < result ? result : max;
        return;
    }
    
    if(arr[e] === '<') {
        for(let i = num + 1; i < 10;i++){
            if(visit[i]) continue;
            visit[i] = 1;
            dfs(e+1, i, result + i.toString());
            visit[i] = 0;
        }
    }else {
        for(let i = num - 1; i > -1;i--){
            if(visit[i]) continue;
            visit[i] = 1;
            dfs(e+1, i, result + i.toString());
            visit[i] = 0;
        }
    }
    return;
}


for(let i = 0; i < 10; i++){
    visit[i] = 1;
    dfs(0, i, i.toString());
    visit[i] = 0;
}

console.log(max);
console.log(min);