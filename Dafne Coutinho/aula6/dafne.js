const readline = require('readline');

async function input() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.on('line', (line) => {
      rl.close();
      resolve(line.trim()); // Retorna o texto sem espaços extras
    });
  });
}

async function leitura(msg){
    console.log(msg); // recebe a mensagem, lê e mostra na saída
    return await input();
}

function aleatório(limite){
    let r = Math.floor(Math.random()*(limite + 1)); // usada para números inteiros
    return r;
}

module.exports = {
    leitura, aleatório, input
}
