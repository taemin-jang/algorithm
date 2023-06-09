function solution(n, words) {
    let duplicate = [];
    let result;
    for(let i = 0; i < words.length; i++){
        if(i === 0) duplicate.push(words[i]);
        else{
            const keyword = duplicate[i-1];
            if(keyword[keyword.length - 1] === words[i][0]){
                if(duplicate.includes(words[i])) {
                    duplicate.pop()
                    return result = [i%n+1, Math.ceil((i+1)/n)]
                }
                duplicate.push(words[i]);
                result = [i%n+1, Math.ceil((i+1)/n)]
            }else{
                return result = [i%n+1, Math.ceil((i+1)/n)];
            }
        }
    }
    if(duplicate.length === words.length) return [0,0];
    return result
}