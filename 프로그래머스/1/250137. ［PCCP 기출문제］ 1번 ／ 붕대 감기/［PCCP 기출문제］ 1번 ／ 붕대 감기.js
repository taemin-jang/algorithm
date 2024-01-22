// 붕대감기는 t초 동안 x만큼의 체력 회복 => t*x
// health >= t
// 죽으면 -1
// [기술 시전 시간 = t, 1초당 회복량 = x, 추가 회복량 = y]
function solution(bandage, health, attacks) {
    const [t, x, y] = bandage;
    let time = 1;
    let combo = 0;
    let atIdx = 0;
    let currentHealth = health;
    while(atIdx < attacks.length){
        const [at, ad] = attacks[atIdx];
        if(time === at){
            currentHealth -= ad;
            if(currentHealth <= 0) return -1;
            atIdx++;
            combo = 0;
        }
        else{
            currentHealth += currentHealth + x <= health ? x : health - currentHealth;
            combo++;
            if(combo === t){
                currentHealth += currentHealth + y <= health ? y : health - currentHealth;
                combo = 0;
            }
        }
        time++;
    }
    return currentHealth;
}