function solution(numLog) {
    let result = "";
    for(let i = 1; i <= numLog.length; i++){
        const num = numLog[i] - numLog[i-1];
        switch(num){
            case 1:
                result += "w";
                break;
            case -1:
                result += "s";
                break;
            case 10:
                result += "d";
                break;
            case -10:
                result += "a";
                break;
        }
    }
    return result;
}