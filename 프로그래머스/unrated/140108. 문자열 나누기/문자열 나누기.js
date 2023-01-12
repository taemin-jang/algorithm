function solution(s) {
    //  첫 글자 담는 변수
    let cnt = [];
    // 첫 글자가 아닌 글자 담는 변수
    let cntA = [];
    // 분리한 문자열을 담는 변수
    let result = [];
    let i = 0;
    for(let v of s){
        // 만약 첫 글자가 담기지 않았거나, 첫 글자와 동일한 글자인 경우
        if(cnt.length === 0 || cnt.includes(v)){
            // cnt에 넣어준다.
            cnt.push(v);
        // 만약 첫 글자가 아닌 글자인 경우
        }else if(!cnt.includes(v)){
            // cntA에 넣어준다.
            cntA.push(v);
            // 만약 cnt와 cntA에 담긴 글자의 개수가 같을 경우
            if(cnt.length === cntA.length){
                // result에 cnt와 cntA의 배열을 합치고 문자열로 만든 후 저장한다.
                result.push(cnt.concat(cntA).join(""));
                // 문자열을 분리해서 저장했으므로 cnt와 cntA는 빈배열로 초기화한다.
                cnt = [];
                cntA = [];
            }
        }
        
        // 마지막 반복일 때
        if(i === s.length -1){
            // 만약 cnt와 cntA를 합쳤을 때 문자가 있다면 
            if(cnt.concat(cntA).join("") !== ""){
                // 남은 문자도 result에 저장한다.
                result.push(cnt.concat(cntA).join(""));
            }
        }
        i++;
    }
    return result.length;
}