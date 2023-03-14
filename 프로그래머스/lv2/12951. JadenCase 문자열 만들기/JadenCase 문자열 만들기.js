function solution(s) {
    let word = s.split(" ");
    var answer = [];
    
    for(let str of word){
        if(str !== ""){
            let st = str.toLowerCase().split("");
            if(/[a-z]/g.test(st[0])){
                st[0] = st[0].toUpperCase();
            }
                answer.push(st.join(""));            
            
        }else{
            answer.push(str);
        }
        
    }
    answer = answer.join(" ");
    return answer;
}