const input = require('../input');

(async () => {
    console.log("Digite seu nome: ");
    let nome = await input();

    console.log("Digite sua idade: ");
    let idade = await input();

    console.log(`Olá ${nome}, voce tem ${idade} anos.`)
})();