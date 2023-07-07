function solution(people, limit) {
    let result = 1;
    let right = people.length - 1;
    people = people.sort((a,b) => b - a);
    let left = 0;
    let sum = people[left];
    while(left !== right){
        if(sum + people[right] <= limit){
            sum += people[right];
            right--;
        }else{
            result++;
            sum = people[++left];
        }
        
    }
    return result;
}