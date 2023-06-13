function solution(clothes) {
    const map = new Map();
    clothes.forEach(cloth => {
        map.set(cloth[1], (map.get(cloth[1]) + 1) || 1);
    })
    return [...map.values()].reduce((acc, cur) => acc * (cur+1),1) - 1;
}