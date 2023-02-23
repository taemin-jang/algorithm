function solution(s, n) {
    return s.split("").map(v => {
        const ctn = v.codePointAt();
        if(ctn >= 65 && ctn <= 90){
            const num = ctn + n > 90 ? ctn + n - 26 : ctn + n;
            return String.fromCharCode(num);
        }else if(ctn >= 97 && ctn <= 122) {
            const num = ctn + n > 122 ? ctn + n - 26 : ctn + n;
            return String.fromCharCode(num);
        }else return v;
    }).join("");
}