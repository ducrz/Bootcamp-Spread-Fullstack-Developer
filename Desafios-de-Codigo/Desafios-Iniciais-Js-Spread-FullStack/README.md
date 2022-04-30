# Desafios de Código Iniciais Js - Spread FullStack- DIO

## Soma Simples

### Desafio 1

Leia dois valores inteiros identificados como variáveis A e B. Calcule a soma entre elas e chame essa variável de SOMA.
A seguir escreva o valor desta variável.

### Entrada

O arquivo de entrada contém 2 valores inteiros.

### Saída

Imprima a variável SOMA com todas as letras maiúsculas, inserindo um espaço em branco antes e depois do símbolo de igualdade, seguido pelo valor correspondente à soma de A e B.

```javascript
import java.util.Scanner;
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let A = parseInt(gets());
let B = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let SOMA =           ;               
print("SOMA = "+ SOMA );
```

## Mês

### Desafio 2

Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

### Entrada

A entrada contém um único valor inteiro.

### Saída

Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split('\n');

let month = lines.shift();

let months = {
  "1": "January",
  "2": "February",

//TODO: Complete os espaços em branco com uma possível solução para o desafio

};

print(       );

```


## Ho Ho Ho

### Desafio 3

Papai Noel está brincando com seus duendes para entretê-los durante a véspera do Natal. A brincadeira consiste nos elfos escreverem números em pedaços de papel e colocarem no gorro do Papai Noel. Após todos terminarem de colocar os números Noel sorteia um papel e aquele número representa quantos "Ho" o Noel deve falar.

Seu trabalho é ajudar o Papai Noel montando um problema que mostre todos os "Ho" que ele deve falar dado o número sorteado.


### Entrada

A entrada é composta por um único inteiro N (0 < N ≤ 106) representando quantos "Ho" serão falados por Noel.

### Saída

A saída é composta por todos "Ho" que Papai Noel deve falar separados por um espaço. 
Após o último "Ho" deve ser apresentado um "!" encerrando o programa.

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let lines = gets().split("\n");

//TODO: Complete os espaços em branco com uma possível solução para o desafio

let N = parseInt(lines.shift());
for (                         ) {
    if (           ) frase +=      ;
    else frase +=        ;
}
print(frase);

```