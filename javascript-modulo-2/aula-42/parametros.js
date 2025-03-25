function dobro(x){
    alert("O dobro de " + x + " é " + x * 2)
}

// dobro(5)
// dobro(7)

// dobro()

function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + "!")
}

// dizerOla("João")
// dizerOla("Maria")
// dizerOla()

function soma(a, b){
    alert("Resultado da Soma é " + (a + b))
}

// soma(7, 6)

function criarUsuario(nome, email, senha, tipo = "comum"){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

//Parâmetros com valores padrãoes devem ficar sempre para o final
function novoUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("João", "joao@gmail.com", "123456", "admin")
novoUsuario("João", "admin", "joao@gmail.com", "123456")


function muitosParamentros(nome, telefone, endereco, aniversario, email, senha){
    // ...
}

muitosParamentros("nome", "telefone", "endereco", "aniversario", "email", "senha")

function objetoComoParamentros(usuario){
    // ...
    usuario.nome
    usuario.email
}


const dadosDoUsuario = {
    nome: "João",
    telefone: "11999999999",
    email: "joao@gmail.com",
    senha: "123456",
    endereco: "Rua das Flores, 123",
    aniversario: "20/01/1990"
}

objetoComoParamentros(dadosDoUsuario)
