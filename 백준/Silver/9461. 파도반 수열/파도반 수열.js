let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const T = input[0];

const d = new Array(101).fill(0);

const recur = (n) => {
    if(n === 1 || n === 2 || n === 3){
        return 1;
    }

    if(d[n] !== 0){
        return d[n];
    }

    d[n] = recur(n-3) + recur(n-2);
    return d[n];
}

for(let i = 1; i <= T; i++){
    console.log(recur(input[i]));
}