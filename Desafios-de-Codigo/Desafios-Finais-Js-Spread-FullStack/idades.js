// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let cont = 0;
let n = 0;
let soma = 0;


do {
    n = parseInt(gets());

    if (n > 0) {
        soma = soma + n;
        cont = cont + 1;

    }

} while (n > 0);

media = soma / cont;

print(media.toFixed(2));