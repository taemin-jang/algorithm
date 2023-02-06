function solution(number) {
    let answer = [];
    const permutation = (nums, num, arr = []) => {
        if(num === 3) answer.push([...arr]);
        else {
            for(let i = 0; i < nums.length; i++) {
                arr.push(nums[i]);
                permutation(nums.slice(i + 1), num + 1, arr);
                arr.pop();
            }
        }
    }
    permutation(number, 0);
    console.log(answer)
    return answer.filter(v => v.reduce((arr,cur) => arr + cur,0) === 0).length;
}