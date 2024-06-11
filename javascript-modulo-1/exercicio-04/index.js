const nome = prompt("E aí, turista! Qual é o seu nome?")
let cidades = ""
let contagem = 0

var continuar = prompt("Você já visitou alguma cidade? (Sim/Não)")

while(continuar === "Sim"){
    let cidade = prompt("Qual o nome da cidade?")

    cidades += "- " + cidade + "\n"
    contagem++

    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(`${nome} vistou ${contagem} cidades. São elas:\n ${cidades}`)