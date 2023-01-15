function solution(ingredient) {
    // 새로운 햄버거 배열
    let burgerList = [];
    // 햄버거 개수
    let result = 0;
    for(let v of ingredient){
        burgerList.push(v);
        // burgerList를 4개씩 잘라서 햄버거가 되는지 안되는지
        // 만약 된다면 result++해주고, burgerList에서 해당 햄버거를 빼준다.
        let burger = burgerList.slice(burgerList.length - 4, burgerList.length);
        if(burger.join("") === '1231'){
            result++;
            burgerList.splice(burgerList.length - 4, 4);
        }
    }
    return result;
}