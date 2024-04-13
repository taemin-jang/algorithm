let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const set = new Set();
let result = [];
let i = 0;

const dfs = (index, arr, n, s) => {
    if(arr.length === 6){
        return result.push(arr.join(" "));
    }
    for(let i = index; i < n; i++){
        dfs(i+1, [...arr, s[i]], n, s);
    }
}

while(input[i] != 0){
    const [n, ...s] = input[i].split(" ");
    dfs(0,[], n, s);
    console.log(result.join("\n"));
    console.log('');
    result = [];
    i++;
}