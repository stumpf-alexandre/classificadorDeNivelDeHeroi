const read = require('readline-sync');

let nomeHeroi = read.question("Digite o nome do heroi: ");
let xpHeroi = Number(read.question("Digite a quantidade de XP do heroi: "));
let xp;
    if (xpHeroi < 1001) {
        xp = "Ferro";
    } else if (xpHeroi > 1000 && xpHeroi < 2001){
        xp = "Bronze";
    } else if (xpHeroi > 2000 && xpHeroi < 5000){
        xp = "Prata";
    } else if (xpHeroi > 5001 && xpHeroi < 7001){
        xp = "Ouro";
    } else if (xpHeroi > 7000 && xpHeroi && xpHeroi < 8001) {
        xp = "Platina";
    } else if (xpHeroi > 8000 && xpHeroi < 9001){
        xp = "Ascendente";
    }else {
        xp = "Radiante";
    }

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${xp} .`)