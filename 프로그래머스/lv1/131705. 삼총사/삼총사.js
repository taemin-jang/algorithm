function solution(number) {
    let answer = [];
    const dfs = (nums, num, arr = []) => {
        if(num === 3) answer.push([...arr]);
        else {
            for(let i = 0; i < nums.length; i++) {
                arr.push(nums[i]);
                dfs(nums.slice(i + 1), num + 1, arr);
                arr.pop();
            }
        }
    }
    dfs(number, 0);
    return answer.filter(v => v.reduce((arr,cur) => arr + cur,0) === 0).length;
}