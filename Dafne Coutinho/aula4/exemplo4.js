const input = require("../input");

(async () => {
        let num;
        let aleatorio;
        let tentativas = 10;
    do{
        console.log("Digite um número: ");
        num = Number(await input());
        aleatorio = Math.floor(Math.random() * 10);
        console.log("Numero sorteado: "+aleatorio)
        tentativas = tentativas - 1;
    }while(num != aleatorio && tentativas>0);
    
    if(tentativas == 0 && num != aleatorio){
        console.log("Acabou");
    }else    
        console.log("Acertou");
})();
