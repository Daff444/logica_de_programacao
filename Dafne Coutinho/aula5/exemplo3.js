//dicionário, ou objeto anônimo, ou estrutura

let users = [];

let user1 = {
    nome: "Dafne",
    idade: 23
}

users[0] = user1

// posso usar: users[] já dentro da posição

let user2 = {
    nome: "Helena",
    idade: 25
}

users[1] = user2

console.log(users)
console.log(users[0])
console.log(users[1].nome)
console.log(users[1].idade)

