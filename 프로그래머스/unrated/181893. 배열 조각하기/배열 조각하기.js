function solution(arr, query) {
    query.forEach((v,i) => {
        if(i % 2){
            arr = arr.slice(v);
        }else{
            arr = arr.slice(0,v+1);
        }
    })
    return arr;
}