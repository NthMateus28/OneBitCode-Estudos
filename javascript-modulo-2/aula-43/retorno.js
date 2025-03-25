function calcularMedia(a, b){
    const media = (a + b) / 2
    return media
}

const Resultado = calcularMedia(7, 2)

console.log("A média é " + Resultado)

function criarProduto(nome, preco){
    const produto = {
        nome, //nome: nome
        preco, //preco: preco
        estoque: 1
    }
    return produto
}

const notebook = 

console.log(criarProduto("Notebook Intel", 2500))

function areaRetangular(base, altura){
    const area = base * altura
    return area
}

function areaQuadrado(lado){
    return areaRetangular(lado, lado)
}

// console.log("A área do retângulo é " + areaRetangular(10, 20))
// console.log("A área do Quadrado é " + areaQuadrado(9))


function ola(){
    let texto = "..."
    texto = "Olá Mundo"
    return texto
    console.log(texto)
}

console.log(ola())

function maioridade(idade){
    if(idade >= 18){
        return "Você é maior de idade"
    }else{
        return "Você é menor de idade"
    }
}

console.log(maioridade(29))
