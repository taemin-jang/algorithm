const file =
  process.platform === "linux" ? "/dev/stdin" : "";

const input = require("fs")
  .readFileSync(file)
  .toString()
  .trim()
  .split(" ");

console.log(input.map(Number).sort((a,b) => a - b).join(' '))