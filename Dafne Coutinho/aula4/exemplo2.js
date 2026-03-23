const input = require("../input");

(async () => {
while(num != 7){
    console.log("Digite um número: ");
    var num = Number(await input());

    if(num == 7){
        console.log("Acertou");
    }
}
})();
