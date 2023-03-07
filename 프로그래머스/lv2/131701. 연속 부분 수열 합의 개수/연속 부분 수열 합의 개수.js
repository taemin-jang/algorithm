function solution(elements) {
    // 기본 변수 저장
    let set = new Set([...elements]);
    for(let i = 2; i <= elements.length; i++){
        // 앞에 i만큼 뒤 문자열에 더해서 원형 배열과 같게 보이기
        let str = elements.concat(elements.slice(0,i));
        for(let j = 0; j < elements.length; j++){
            set.add(str.slice(j,j+i).reduce((acc,cur) => acc + cur,0));
        }
    }
    return set.size;
}