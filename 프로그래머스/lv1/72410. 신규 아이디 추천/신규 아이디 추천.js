function solution(new_id) {
    while(true){
        if(/(^\.)|[^0-9a-z\-\_\.]|(\.$)/.test(new_id) || new_id.includes("..") || new_id === ""){
            new_id = new_id.toLowerCase();
            new_id = new_id.replace(/[^0-9a-z\-\_\.]/g,'');
            new_id = new_id.replaceAll("..", ".");
            new_id = new_id.replace(/(^\.)|(\.$)/g, '');
            new_id = new_id === "" ? "a" : new_id;
            continue;
        }
        if(new_id.length >= 16) {
            new_id = new_id.slice(0, 15);
            new_id = new_id.replace(/(\.$)/, '');
        }
        if(new_id.length <= 2) new_id += new_id[new_id.length - 1];
        else break;
    }
    return new_id
}