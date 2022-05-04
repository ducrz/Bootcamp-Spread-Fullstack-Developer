# Desafios Intermediários Js - Spread FullStack- DIO

## Preenchimento de Vetor I

### Desafio 1

Você recebeu o desafio de ler um valor e criar um programa que coloque o valor lido na primeira posição de um vetor N[10]. Em cada posição subsequente, coloque o dobro do valor da posição anterior. Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim sucessivamente. Mostre o vetor em seguida.

### Entrada

A entrada contém um valor inteiro (V<=50).

### Saída

Para cada posição do vetor, escreva "N[i] = X", onde i é a posição do vetor e X é o valor armazenado na posição i. O primeiro número do vetor N (N[0]) irá receber o valor de V.

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const input = gets();
let a = input;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (                              ) {
  print(`N[${      }] = ${   }`);
  a =       ;
}
```

## Saída 1

### Desafio 2

O seu instrutor de lógica de programação, Damilson Bonetti, quer que você desenvolva uma tela com as seguintes características:

    Conter 39 traços horizontais ( - ) na primeira linha;
    Conter um traço vertical ( | ) embaixo do primeiro traço e do trigésimo nono traço da primeira linha, preencher no meio com espaço em branco;
    Repita o procedimento 2 quatro vezes;
    Repita o procedimento 1.

No final deve ficar igual a imagem a seguir:

--------------------------------------- (39 traços)

|                                     |

|                                     |

|                                     |

|                                     |

|                                     |

--------------------------------------- (39 traços)

### Entrada

Não há.

### Saída

A saída será impresso conforme a figura acima.


```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

print('---------------------------------------');

//TODO: Complete os espaços em branco com uma possível solução para o desafio

```


## Twittando

### Desafio 3

O microblog Twitter é conhecido por limitar as postagens em 140 caracteres. Conferir se um texto vai caber em um tuíte é sua tarefa.


### Entrada

A entrada é uma linha de texto T (1 ≤ |T| ≤ 500).


### Saída

A saída é dada em uma única linha. Ela deve ser "TWEET" (sem as aspas) se a linha de texto T tem até 140 caracteres. Se T tem mais de 140 caracteres, a saída deve ser "MUTE".

```javascript
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let T = gets();

//TODO: Complete os espaços em branco com uma possível solução para o desafio

print((T.length <= 140) ?         :            );

```