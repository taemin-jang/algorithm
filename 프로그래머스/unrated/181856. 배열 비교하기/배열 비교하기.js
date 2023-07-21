function solution(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;
    if(len1 === len2) {
        let sum1 = arr1.reduce((acc, cur) => acc + cur,0);
        let sum2 = arr2.reduce((acc, cur) => acc + cur,0);
        if(sum1 > sum2) return 1;
        else if(sum1 < sum2) return -1;
        else return 0;
    }else{
        if(len1 > len2) return 1;
        else return -1;
    }
}