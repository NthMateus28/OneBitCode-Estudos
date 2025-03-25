let fila = [];
let opcao = ""

do {
    let pacientes = ""
    for(let i = 0; i< fila.length; i++) {
        pacientes += (i + 1) + "° - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes +
        "\nEscolha uma opção:" +
        "\n1 - Adicionar Paciente" +
        "\n2 - Remover Paciente" +
        "\n3 - Sair"
    )
        
    switch(opcao) {
        case "1":
            const novoPaciene = prompt("Qual o nome do paciente?")
            fila.push(novoPaciene)
            break
            case "2":
                const pacienteConsultado = fila.shift()
                if (pacienteConsultado){
                    alert("Paciente " + pacienteConsultado + " foi atendido")
                } else {
                    alert("Não há pacientes na fila")
                }
                break
            case "3":
                alert("Saindo...")
    }

} while (opcao !== "3");
