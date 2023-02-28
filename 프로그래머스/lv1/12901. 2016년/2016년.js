function solution(a, b) {
    const result = new Date(`${a} ${b}, 2016`);
    let day = ""
    switch(result.getDay()){
        case 0:
            day = "SUN";
            break;
        case 1:
            day = "MON";
            break;
        case 2:
            day = "TUE";
            break;
        case 3:
            day = "WED";
            break;
        case 4:
            day = "THU";
            break;
        case 5:
            day = "FRI";
            break;
        case 6:
            day = "SAT";
            break;
    }
    return day;
}