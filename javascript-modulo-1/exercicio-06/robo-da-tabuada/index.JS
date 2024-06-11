const entrada = prompt("De qual número você deseja calcular a tabuada?");
const numero = parseFloat(entrada);

if (!isNaN(numero)) {
    let resultado = "";

    for (let fator = 1; fator <= 10; fator++) {
        resultado += numero + " x " + fator + " = " + numero * fator + "\n";
    }

    alert("Resultado da Tabuada de " + numero + ":\n\n" + resultado);
} else {
    alert("Por favor, digite um número válido.");
}
