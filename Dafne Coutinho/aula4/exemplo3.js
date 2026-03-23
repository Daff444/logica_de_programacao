const input = require("../input");

(async () => {

    let aleatorio;
    do{
        console.log("Digite um número: ");
        num = Number(await input());
        aleatorio = Math.floor(Math.random() * 10);
        console.log("Numero sorteado: "+aleatorio)
    }while(num != aleatorio);
    
    console.log("Acertou");
})();
