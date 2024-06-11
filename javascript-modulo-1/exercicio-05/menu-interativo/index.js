let opcao = "5"

do{
 opcao = prompt("Selecione uma das seguintes opções:" +
    "\n1. Painel Inicial" +
    "\n2. Nossa História" +
    "\n3. Contatos" +
    "\n4. Curiosidade" +
    "\n5. Encerrar")

    switch(opcao){
        case "1":
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolheu a opção 2")
            break
        case "3":
            alert("Você escolheu a opção 3")
            break
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu encerrar")
            alert("Encerrando...")
            break
            default:
                alert("Opção Inválida!")
    }
}while(opcao !== "5")

alert("Obrigado pela sua visita")