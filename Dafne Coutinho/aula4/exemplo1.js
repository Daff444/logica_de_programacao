const input = require("../input");

(async () => {
while(true){
    console.log("Digite um número: ");
    let num = Number(await input());

    if(num == 7){
        console.log("Acertou");
        break;
    }
}
})();
