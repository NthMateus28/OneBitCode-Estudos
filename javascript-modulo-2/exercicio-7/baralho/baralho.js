const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no Bralho" + baralho.length + "\n" +
        "1 - Adicionar uma carta\n" +
        "2 - Puxar uma carta\n" +
        "3 - Sair"
    )

    switch (opcao) {
        case "1":
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case "2":
            const cartaPuxada = baralho.pop()
            if (!cartaPuxada) {
                alert("Não ah nenhuma carta no Bralho")
            } else {
                alert("Você puxou um(a) " + cartaPuxada)
            }
            break
        case "3":
            alert("Encerrando o programa...")
            break
        default:
            alert("Opção inválida")
    }

} while (opcao !== "3")