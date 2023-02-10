function solution(survey, choices) {
    const types = {
        "R" : 0,
        "T" : 0,
        "C" : 0,
        "F" : 0,
        "J" : 0,
        "M" : 0,
        "A" : 0,
        "N" : 0,
    }
    let answer = "";
    
    choices.forEach((v,i) => {
        switch(v) {
            case 1:
                types[survey[i][0]] += 3;
                break;
            case 2:
                types[survey[i][0]] += 2;
                break;
            case 3:
                types[survey[i][0]] += 1;
                break;
            case 4:
                break;
            case 5:
                types[survey[i][1]] += 1;
                break;
            case 6:
                types[survey[i][1]] += 2;
                break;
            case 7:
                types[survey[i][1]] += 3;
                break;
        }
    })
    
    if(types['R'] >= types['T']) answer += "R";
    else answer += "T";
    
    if(types['C'] >= types['F']) answer += "C";
    else answer += "F";
    
    if(types['J'] >= types['M']) answer += "J";
    else answer += "M";
    
    if(types['A'] >= types['N']) answer += "A";
    else answer += "N";
    
    return answer;
}