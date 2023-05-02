function solution(a, d, included) {
    function tt (n) {
        return a + (n-1)*d;
    }
    let result = 0;
    included.forEach((v,i) => {
        if(v){
            result += tt(i+1);
        }
    })
    return result;
}