function solution(s) {
    let arr = [];
    return s.split("").map((v,i) => {
        if(!arr.includes(v)){
            arr.push(v);
            return -1;
        }else{
            arr.push(v);
            let index;
            if(arr.lastIndexOf(v) === arr.indexOf(v, arr.findIndex(val => val === v)+1)){
                index = i - arr.indexOf(v);
            }else{
                arr.splice(arr.indexOf(v), 1, ""); 
                index = i - arr.indexOf(v);
            }
            return index;
        }
    })
}