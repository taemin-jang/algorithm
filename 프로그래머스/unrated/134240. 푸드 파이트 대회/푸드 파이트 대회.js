function solution(food) {
    // foods로 얕은 복사
    let foods = food.slice();
    // 중앙에 0을 배치해서, 0을 기준으로 앞 뒤에 추가가 될 예정
    let result = [0];
    let i = foods.length - 1;
    while(i !== 0){
        // 칼로리가 큰 순으로 2 이상이면 result 앞 뒤에 추가
        if(foods[i] > 1){
            result.push(i);
            result.unshift(i);
            foods[i] -= 2;
        }else{
            i--;
        }
    }
    return result.join("");
}