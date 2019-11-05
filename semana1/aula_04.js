//
//|----------------------|
//|--Exercicios linha 94-|
//|----------------------|
//
// let arrayc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for (x=0; x < arrayc.length; x++){
// console.log(arrayc[x])
// }

// const array = [1,2,3,4,5]
// let array2 = []

// array.push (6) // Adicionar informação no array
// for (x=0; x < array.length; x++){
// console.log(array[x])
// }


// for (x=0; x < array.length; x++){
// array2.push ('\"' + array[x] + "\"")
// }
// console.log(array2)
// console.log(array)

//____________________________________________________

// let i = 0
// while (i<10){
//   console.log(i)
//   i++
// }

// let numerou = Number(prompt("Digite 1 número"))
// let sum = 0
// while (numerou !== 0){
//   sum += numerou
//   numerou = Number(prompt("Digite 1 número"))
//   console.log(numerou)
// }
// console.log(sum)

//_______________________________________________

// Exercício for
// Escreva um código que imprima todos os números de 0 a 10, indicando, na mensagem, se ele é par ou ímpar.

// let arrayfor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (x=0; x <= arrayfor.length; x++){
//   if(arrayfor[x]%2 === 0 ){
//     console.log(arrayfor[x] +" é par")
//     }    
//   else if(arrayfor[x]%2 === 1) {
//     console.log(arrayfor[x]+" é ímpar")
//   }
// }

// Localize o maior numero dentro do Array
// const numeros = [11, 15, 18, 14, 12, 13]
// let maior = numeros[0]

// for (let i = 0; i <= numeros.length; i++){
//   const elemento = numeros[i]
//   if(elemento>maior){
//     maior = elemento
//   }
// } 
// console.log("O maior array é "+ maior)

// const numeros = [11, 15, 18, 14, 12, 13]
// let maior = numeros[0]

// for (let elemento of numeros)//for (variável) of (nome do array){}
// {
//   if(elemento>maior){
//     maior = elemento
//   }
// } 
// console.log("O maior array é "+ maior)

const frase = ["Oi","sumida","tudo bem?","Saudades."]
let frasecompleta = ""

for(let palavra of frase)//Sempre usar uma proxima variavel
{
  frasecompleta += " " + palavra
}
console.log(frasecompleta)



// Exercicios 31/10

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

// Resposta: o código está somando a variavel i 11 vezes, soma sempre o valor anterior com o proximo e depois soma o resultado desse calculo com o proximo, faz esse loop 11 vezes. O valor impresso no console é 55

/*let sum = 0
for(let i = 0; i < 11; i++) {
  sum += i
}
console.log(sum)
*/

// 2. Leia o código abaixo:

/*
const lista = [10, 11, 12, 15, 18, 19, 20, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista){
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
*/

// a. O que o comando `.push` faz?
// Resposta: Ele adiciona uma variavel ao final do array

// b. Qual o valor impresso no console?
// Resposta: [ 10, 15, 20, 25, 30 ]

// c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
// Resposta : numero = 3 --> [ 12, 15, 18, 27, 30 ]
//            numero = 4 --> [ 12, 20 ]

// Desafio de leitura de código
/*
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}
*/

// Resposta: Independente do numero digitado ele vai sempre adicionar uma linha e uma coluna simultaneamente repetindo o processo ate imprimir o valor em linhas que vc digitou e o numero de colunas das linhas é equivalente a linha que está.
//           0
//           00
//           000
//           0000

//___________________________________________________________________________________________

// Exercicios de escrita

// Nas perguntas abaixo, considere que você tenha acesso a um `array`  (chamado de 'array original') que seja composto somente de números. Após o enunciado, há um exemplo de qual deve ser a resposta final de cada programa individualmente. 

// a. Escreva um programa que devolva o maior e o menor números contidos no array original

const numeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = numeros[0]
let menor = numeros[0]

for (let elemento of numeros)//for (variável) of (nome do array){}
{
  if(elemento>maior){
    maior = elemento
  }
  for (elemento of numeros){
    if(elemento<menor){
    menor = elemento
  }
  }
} 
console.log("O maior número é "+ maior + " e o menor é "+menor)



// b. Escreva um programa que devolva um novo array contendo todos os valores do array original divididos por 10.

let divisao = []

for (let elemento of numeros)//for (variável) of (nome do array){}
{
  let div = elemento / 10
  divisao.push(div)
  
} 
console.log(divisao)

// c. Escreva um programa que devolva um novo array contendo, somente, os números ímpares do array original.

let impares = []

for (let elemento of numeros)//for (variável) of (nome do array){}
{
  if(elemento%2 === 1){
  
  impares.push(elemento)
  }
} 
console.log(impares)

// d. Escreva um programa que um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"

let x = 0
for (let elemento of numeros)//for (variável) of (nome do array){}
{ 
  console.log("O elemento do índex "+x+ " é "+ numeros[x])
  x++
    }

// Desafios de Programação
//
// 5 . Neste exercício vocês vão implementar uma brincadeira muito simples: "Adivinhe o número que estou pensando". Ele deve ser jogado entre duas pessoas. Inicialmente, uma das pessoas insere qual o número em que ela pensou. A outra pessoa tem que ficar chutando até acertar em cheio o número. Esta é uma tarefa difícil, então quem escolheu o número fica dando umas dicas para a outra pessoa, indicando se o número que ela pensou é maior ou menor do que o chute em si. Veja, abaixo, um exemplo de partida:

// Um resumo das funcionalidades são:

// - Solicitar que o primeiro jogador escolha um número, através do `prompt`. Neste momento, deve-se imprimir no console a mensagem `Vamos jogar!`
// - A partir daí, será solicitado, ao segundo jogador, que ele chute os números até acertar, através do `prompt`. A cada chute, deve ser informado no console:
//     - O número chutado, com a mensagem: `O número chutado foi: <número>`
//     - Uma mensagem dizendo se o número escolhido é maior ou menor do que o número chutado: `Errou. O número escolhido é maior/menor`
// - Quando o segundo jogador acertar o número escolhido pelo primeiro jogador, deve ser impressa a mensagem: `Acertou` ; e, embaixo, `O número de tentativas foi : <quantos chutes o usuário deu>`

//const pessoa1 = Number(prompt("Escolha 1 Numero"))
let pessoa2 = Number(prompt("Tente Adivinhar o Número entre 1 - 100")) //Number(prompt("Tenta adivinhar o numero escolhinho pelo computador"))
let contador = 1
const min = 1
const max = 100
let computador = Number(Math.floor(Math.random() * (max - min)) + min);

for(contador ; pessoa2 !== computador && pessoa2 >0 && pessoa2 < 101 ; contador++){
  if (pessoa2>computador){
    console.log("O número chutado foi: "+pessoa2)
    console.log("Bateu na trave, porem o número deve ser menor")
    pessoa2 = Number(prompt("Bateu na trave, porem o número deve ser menor"))
  }
  else if(pessoa2<computador){
    console.log("O número chutado foi: "+pessoa2)
    console.log("Bateu na trave, porem o número deve ser maior")
    pessoa2 = Number(prompt("Bateu na trave, porem o número deve ser maior"))
  }
}

if(pessoa2 === computador){
console.log("O número chutado foi: "+pessoa2)
console.log("Acertou Miseravi!!!!!")
console.log("O número de tentativas foi : "+contador)
}
else if(pessoa2 < 1 || pessoa2>100 ){
console.log("O número que encerrou o programa foi: "+pessoa2)
console.log("O número de tentativas foi : "+contador)
console.log("Jogo Finalizado por você não digitar nenhum valor, digitar abaixo de 1 ou digitar acima de 100")
}


// 6 . Uma das principais características de um bom programador é conseguir resolver seus problemas independentemente. Queremos que você comece a treinar isso a partir de hoje! Então, vamos pedir para que você faça uma alteração no código acima. Agora, ao invés de ter 2 jogadores, haverá um só; e o seu adversário será o computador. A ideia é: ao iniciar o jogo, você deve sortear um número aleatório (entre 1 e 100) e o usuário terá que ficar chutando o valor até acertar. Mantenha as demais funcionalidades e mensagens pedidas no exercício anterior.

// Resposta: Está resolvido na acima
  
