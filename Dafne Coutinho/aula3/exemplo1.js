const input = require("../input");

(async () => {
    console.log("Qual a sua idade: ");
    let idade = Number (await input() );

    if(idade >= 18 ){
        console.log("Maior de idade");
    }else{
        console.log("Menor de idade");
    }
})();

