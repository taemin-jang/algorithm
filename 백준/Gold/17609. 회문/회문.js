let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tc = +input[0];
const palin = (str) => {
    return str === str.split("").reverse().join("");
}

for(let i = 1; i <= tc; i++){
    if(palin(input[i])) {
        console.log(0);
        continue;
    }
    let isSubPalin = false;
    const n = input[i].length;
    for(let j = 0; j < parseInt(n / 2); j++){
        if(input[i][j] !== input[i][n-j-1]){
            if(palin(input[i].slice(0, j) + input[i].slice(j+1))) isSubPalin = true;
            if(palin(input[i].slice(0, n - 1 - j) + input[i].slice(n-j))) isSubPalin = true;
            break;
        }
           
    }
    isSubPalin ? console.log(1) : console.log(2)
}