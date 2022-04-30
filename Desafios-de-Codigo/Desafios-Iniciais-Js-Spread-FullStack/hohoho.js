// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");

let N = parseInt(lines.shift());
var frase = "";

for (var i = 0; i < N - 1; i++) {
    frase += "Ho ";
}

frase += "Ho!";

print(frase);
