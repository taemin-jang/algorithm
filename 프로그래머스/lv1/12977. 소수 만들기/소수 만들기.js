function solution(nums) {
    const answer = [];
    const isSosu = (num) => {
        if(num === 1) return false;
        for(let i = 2; i < num; i++){
            if(!(num % i)) return true;
        }
        return false;
    }
    const permutation = (arr, num, sum = []) => {
        if(num === 3) return answer.push(sum.reduce((acc, cur) => acc + cur, 0));
        else{
            for(let i = 0; i < arr.length; i++){
                sum.push(arr[i]);
                permutation(arr.slice(i+1), num+1, sum);
                sum.pop()
            }
        }
    }
    permutation(nums, 0);
    return answer.filter(v => !isSosu(v)).length;
}