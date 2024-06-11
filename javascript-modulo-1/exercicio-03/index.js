const medida = parseFloat(prompt("Digite a medida em metros:"));

const unidade = prompt(
    "Selecione o formato que gostaria para a medida:" +
        " \na) milímetro (mm) " +
        "\nb) centímetro (cm) " +
        "\nc) decímetro (dm) " +
        "\nd) decâmetro (dam) " +
        "\ne) hectômetro (hm) " +
        "\nf) quilômetro (km)"
);

switch (unidade) {
    case "a":
        alert(`Resulado: ${medida} = ${medida * 1000}mm`);
        break;
    case "b":
        alert(`Resulado: ${medida} = ${medida * 100}cm`);
        break;
    case "c":
        alert(`Resulado: ${medida} = ${medida * 10}dm`);
        break;
    case "d":
        alert(`Resulado: ${medida} = ${medida / 10}dam`);
        break;
    case "e":
        alert(`Resulado: ${medida} = ${medida / 100}hm`);
        break;
    case "f":
        alert(`Resulado: ${medida} = ${medida / 1000}km`);
        break;
    default:
        alert("O dado inserido é inválido!");
}
