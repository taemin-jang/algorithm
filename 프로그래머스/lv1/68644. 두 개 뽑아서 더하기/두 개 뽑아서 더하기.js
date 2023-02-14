function solution(numbers) {
    const answer = [];
    const permutation = (nums, num, arr = []) => {
        if(num === 2) return answer.push([...arr]);
        else {
            for(let i = 0; i < nums.length; i++){
                arr.push(nums[i]);
                permutation(nums.slice(i+1), num + 1, arr);
                arr.pop();
            }
        }
    }
    permutation(numbers, 0);
    return [...new Set(answer.map(v => v.reduce((acc, cur) => acc + cur, 0)).sort((a,b) => a - b))];
}