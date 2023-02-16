function solution(cards1, cards2, goal) {
    for(let v of goal) {
        if(cards1.includes(v)){
            if(cards1.shift() !== v){
                return "No";
            }
        }else{
            if(cards2.shift() !== v){
                return "No";
            }
        }
    }
    return "Yes";
}