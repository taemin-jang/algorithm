function solution(s){
    const stack = [];
    s = s.split("");
    let i = 0;
    while(i < s.length){
        if(s[i] === "(") stack.push(s[i])
        else if(stack.pop() !== "(") return false;
        i++;
    }
    return stack.length ? false : true;
}