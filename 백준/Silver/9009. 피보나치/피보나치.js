let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let tc = +input[0];

let arr = Array(45).fill(0);
function slowFib(n) {
	if (n < 2) {
    	return n; 
    } 
    
    return fib(n-2) + fib(n-1) 
} 

//Generic Momoization Function 
function memoize(fn) { 
    const cache = {}; 
    return function(...args) {
    	if (cache[args]) { 
            return cache[args]; 
      } 
      const result = fn.apply(this, args);
      arr[args[0]] = result;
      cache[args] = result; 
      return result; 
    } 
} 

const fib = memoize(slowFib);
fib(44);
for(let i = 1; i <= tc; i++){
  let num = +input[i];
  let result = [];
  for(let j = arr.length - 1; j > 0; j--){
    if(num >= arr[j]){
      num -= arr[j];
      result.push(arr[j]);
      if(num === 0) break;
    }
  }
  console.log(result.reverse().join(" "));
  result = [];
}
