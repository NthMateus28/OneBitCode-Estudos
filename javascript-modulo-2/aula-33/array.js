const arr = [
    "Frodo",
    "Sam",
    "Merry",
    "Pippin",
    "Gandalf",
    "Aragorn",
    "Legolas",
    "Gimli",
];
console.log(arr);

// Adicionar Elementos No final
// push
let tamanho = arr.push("Boromir");
arr.push("Boromir");
console.log(arr);

// // Adicionar Elementos No Início
// //unshift
arr.unshift("Boromir");
console.log(arr);

// Remove último elemento do array
//pop
const ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);
