function solution(l, r) {
    let str = "0";
    let arr = [];
    while(+str <= 1000000){
        if(str[str.length - 1] === "5") {
            if(str.indexOf("0") === -1) str = "5" + "0".repeat(str.length);
            else {
                let last = str.lastIndexOf("0");
                str = str.slice(0, last) + "5" + "0".repeat(str.length - last - 1);
            }
        }
        else str = (+str + 5) + "";
        arr.push(+str);
    }
    arr = arr.filter(v => (l <= v && v <= r));
    return arr.length ? arr.sort((a,b) => a - b) : [-1];
}