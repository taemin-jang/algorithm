function solution(arr)
{
    const stack = [];
    arr.forEach((num,i) => {
        if(!stack.length) stack.push(num);
        else{
            if(stack[stack.length - 1] !== num) stack.push(num);
        }
    })
    return stack;
}