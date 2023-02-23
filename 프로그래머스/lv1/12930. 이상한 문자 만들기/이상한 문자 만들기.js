function solution(s) {
    return s.split(" ").map((val) => val.split("").map((v,i) => !(i % 2) ? v.toUpperCase() : v.toLowerCase()).join("")).join(" ")
}