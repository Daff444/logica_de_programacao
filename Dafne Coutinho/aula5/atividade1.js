/*
Faça um programa que permita o usuário cadastrar uma agenda telefônica,
pedindo nome e telefone, a cada item inserido pergunta se ele deseja inserir
um novo, no máximo 5 itens. No final exiba todos os itens da lista.
*/

const {leitura} = require("../dafne");


(async () => {

    let agenda = [];
    let continuar = "sim"

    for(let i = 0; i < 5 && continuar == "sim"; i++){
        
        
        let name = await leitura("Digite o nome: ");

        let num = await leitura("Digite o número do contato: ");

        agenda[i]= {
            nome: name,
            telefone: num
        }

        continuar = await leitura("Você quer adicionar mais um contato?");

    }

    console.log(agenda)
})();




