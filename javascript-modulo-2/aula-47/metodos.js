let pessoa = {
    nome: "João",
    idade: 20,
    dizerOla(){
        console.log("Olá, Mundo! Meu nome é " + this.nome)
    }
}


console.log(pessoa)
pessoa.dizerOla()
