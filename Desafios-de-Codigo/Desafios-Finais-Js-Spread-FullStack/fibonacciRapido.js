// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets()); // Pega o Número


let fib = ((Math.pow((1 + Math.sqrt(5)) / 2, N) - Math.pow((1 - Math.sqrt(5)) / 2, N))) / Math.sqrt(5); // Seguindo exatamente a fórmula

print(fib.toFixed(1)); // Formatando para uma casa decimal