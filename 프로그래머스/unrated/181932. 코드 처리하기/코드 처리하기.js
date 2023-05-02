function solution(code) {
    let mode = 0;
    let result = "";
    [...code].forEach((v,i) => {
        if(mode === 0) {
            if(v !== "1" && !((i) % 2)) result += v;
            else if(v === "1") mode = 1;
        }else{
            if(v !== "1" && ((i) % 2)) result += v;
            else if(v === "1") mode = 0;
        }
    })
    
    return result === "" ? "EMPTY" : result;
}