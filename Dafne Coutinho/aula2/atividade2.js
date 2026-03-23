const input = require('../input');

(async () => {
    console.log("Digite o primeiro numero: ");
    let n1 = Number(await input());

    console.log("Digite o segundo numero: ");
    let n2 = Number(await input());

    console.log(`A soma é ${n1} + ${n2} = ${n1 + n2}`)
})();