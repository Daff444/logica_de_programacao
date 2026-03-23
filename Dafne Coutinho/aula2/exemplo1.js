/* 
const: variável constante, nao pode ser alterada
require: requerer um arquivo externo
../ utilizado para voltar uma pasta
*/
const input = require('../input');

(async () => {
    console.log("Digite seu nome: ");
    let nome = await input();
    
    console.log("Olá " + nome);
})();
