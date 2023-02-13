function solution(new_id) {
    let answer = new_id.toLowerCase()
        .replace(/[^0-9a-z\-\_\.]/g,'')
        .replace(/\.{2,}/g, '.')
        .replace(/(^\.)|(\.$)/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')
    return answer.padEnd(3, answer[answer.length-1])
}
