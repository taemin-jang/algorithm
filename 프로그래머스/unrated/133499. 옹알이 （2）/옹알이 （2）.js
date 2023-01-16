function solution(babbling) {
    let newBabbling = babbling.map(v => {
        let arr =[...v.matchAll(/aya|ye|ma|woo/g)];
        return arr.flat();
    }).filter((v,i) => v.join("") === babbling[i]);
    let cnt =  0;
    newBabbling.forEach((v,i) => {
        let index = 0;
        while(index < v.length){
            if(v[index] === v[index+1]) break;
            index++;
        }
        if(index === v.length){
            cnt++;
        }
    })
    return cnt;
}