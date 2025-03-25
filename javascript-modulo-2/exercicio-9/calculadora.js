function calcularAreaTriangulo(){
    const base = prompt("Digite a base do triângulo:")
    const altura = prompt("Digite a altura do triângulo:")
    return (base * altura) / 2
}

function calcularAreaRetangulo(){
    const base = prompt("Digite a base do Retângulo:")
    const altura = prompt("Digite a altura do Retângulo:")
    return base * altura
}

function calcularAreaQuadrado(){
    const lado = prompt("Digite o lado do Quadrado:")
    return lado * lado
}

function calcularAreaDoTrapezio(){
    const baseMaior = parseFloat(prompt("Digite a base maior do Trapézio:"))
    const baseMenor = parseFloat(prompt("Digite a base menor do Trapézio:"))
    const altura = prompt("Digite a altura do Trapézio:")
    return ((baseMaior + baseMenor) * altura) / 2
}


function calcularAreaDoCirculo(){
    const lado = prompt("Digite o raio do Circulo:")
    return 3.14 * (lado * lado)
}


function exibirMenu(){
    return prompt("Escolha a forma geométrica para calcular a área: \n 1 - Triângulo \n 2 - Retângulo \n 3 - Quadrado \n 4 - Trapézio \n 5 - Círculo \n 6 - Sair")
}

function executar(){
    let opcao = exibirMenu()

    do {
        opcao = exibirMenu()
        let resultado
        switch(opcao){
            case "1":
                resultado = calcularAreaTriangulo()
                // alert("A área do triângulo é: " + calcularAreaTriangulo())
                break
            case "2":
                resultado = calcularAreaRetangulo()
                // alert("A área do retângulo é: " + calcularAreaRetangulo())
                break
            case "3":
                resultado = calcularAreaQuadrado()
                // alert("A área do quadrado é: " + calcularAreaQuadrado())
                break
            case "4":
                resultado = calcularAreaDoTrapezio()
                // alert("A área do trapézio é: " + calcularAreaDoTrapezio())
                break
            case "5":
                resultado = calcularAreaDoCirculo()
                // alert("A área do círculo é: " + calcularAreaDoCirculo())
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida")
        }
        if(resultado){
            alert("O resultado da área é: " + resultado)
        }
    }while(opcao !== "6")
}

executar()

