const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        "Bem vindo ao cadastro de móveis\n" +
        "Total de imóveis: " + imoveis.length + "\n" +
        "\n\nEscolha uma opção:" +
        "\n1 - Cadastrar Imóvel" +
        "\n2 - Listar Imóveis" +
        "\n3 - Sair"
    )

    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.proprietário = prompt("Digite o nome do proprietário do imóvel:")
            imovel.quartos = prompt("Digite a quantidade de quartos do imóvel:")
            imovel.banheiros = prompt("Digite a quantidade de banheiros do imóvel:")
            imovel.garagem = prompt("O imóvel possui garagem? (sim/não)")

            const confirmacao = confirm("Tem certeza que deseja cadastrar este imóvel?\n" +
                "\nProprietário: " + imovel.proprietário +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nGaragem: " + imovel.garagem
            )
            if (confirmacao) {
                imoveis.push(imovel)
                alert("Imóvel cadastrado com sucesso!")
            } else {
                alert("Cadastro cancelado!")
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imóvel " + (i + 1) + ":\n" +
                    "Proprietário: " + imoveis[i].proprietário +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando o programa...")
            break
        default:
            alert("Opção inválida")
    }
} while (opcao !== "3")
