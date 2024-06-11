let valor = parseFloat(prompt("Qual é o valor inicial?"))
let opcao = "3"

do{
    opcao = prompt("Seu valor atual é: R$" + valor + 
    "\nSelecione uma das seguintes opções:" +
    "\n1. Adicionar" +
    "\n2. Retirar" +
    "\n3. Encerrar") 

    switch(opcao){
        case "1":
            valor += parseFloat(prompt(`O valor atual é de ${valor}. Quanto gostaria de adicionar?`))
            break

        case "2":
            valor -= parseFloat(prompt("Quanto gostaria de remover?"))
            break

        case "3":
            alert("Você escolheu encerrar")
            alert("Encerrando...")
            break
            default:
            alert("Opção Inválida!")
    }
} while(opcao !== "3")

alert("Obrigado pela sua visita!")