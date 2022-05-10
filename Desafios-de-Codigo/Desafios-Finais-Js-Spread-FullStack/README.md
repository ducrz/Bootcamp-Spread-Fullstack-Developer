# Desafios Finais Js - Spread FullStack- DIO

## Galopeira

### Desafio 1

Sempre competindo para saber quem é o melhor, Capitão América e Homem de Ferro fizeram um desafio: quem digita mais rápido. Para isto, conseguiram um computador que não processa teclas pressionadas, ou seja, se for para digitar a mesma letra duas vezes seguidas, precisa pressionar a tecla duas vezes, visto que, pressionar a tecla por mais tempo, não adianta, e calcularam o tempo de uma tecla pressionada, que foi de um centésimo de segundo.

O desafio seria quem digitasse a palavra “galopeira”, formada por mais letras e, mas ambos eram muito bons e chegava num ponto que não era possível contar quantas letras haviam sido digitadas. Então, os super heróis pediram humildemente a sua ajuda para escrever um programa que verifique a palavra digitada e veja quanto tempo foi gasto para a digitação.

Escreva um programa que, dada uma palavra digitada, informe quanto tempo foi gasto para ser digitada.

### Entrada

Um número inteiro C será informado, que será a quantidade de casos de teste. Cada caso tem uma palavra, de, no mínimo, 9 e, no máximo 10000 letras.

### Saída

Para cada caso de teste, imprima um número T, que é o tempo gasto, em segundos, para digitar a palavra do respectivo caso de teste, com aproximação de duas casas decimais.

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let num = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 0; i < num; i++) {
                
    T = C.length;
    print(                );
}
```

## Idades

### Desafio 2

Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo. O último dado, que não entrará nos cálculos, contém o valor de idade negativa. Calcular e imprimir a idade média deste grupo de indivíduos.

### Entrada

A entrada contém um número indeterminado de inteiros. A entrada será encerrada quando um valor negativo for lido.

### Saída

A saída contém um valor correspondente à média de idade dos indivíduos.

A média deve ser impressa com dois dígitos após o ponto decimal.



```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let cont = 0;
let n = 0;
let soma = 0;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

do {


}while (n > 0);


print(media.toFixed(2));
```


## Fibonacci Rápido

### Desafio 3

A fórmula de Binet é uma forma de calcular números de Fibonacci.

Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando a fórmula acima.


### Entrada

A entrada é um número natural n (0 < n ≤ 50).


### Saída

A saída é o valor de Fibonacci(n) com 1 casa decimal utilizando a fórmula de Binet dada.


```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados.
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o problema

let fib = (Math.pow((                   ) / 2, N) - Math.pow((                  )) /              ;

print(fib.toFixed(   ));

```