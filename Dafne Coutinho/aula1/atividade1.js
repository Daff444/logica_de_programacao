/*
Faça um programa que permita o usuário cadastrar uma agenda telefônica,
pedindo nome e telefone, a cada item inserido pergunta se ele deseja inserir
um novo, no máximo 5 itens. No final exiba todos os itens da lista.
*/

const input = require("../input");


(async () => {

    let agenda = [];
    let continuar = "sim"

    for(let i = 0; i < 5 && continuar == "sim"; i++){
        
        console.log("Digite o nome: ");
        let name = await input();

        console.log("Digite o número do contato: ");
        let num = await input();

        agenda[i]= {
            nome: name,
            telefone: num
        }

        console.log("Você quer adicionar mais um contato?");
        continuar = await input();

    }

    console.log(agenda)
})();




