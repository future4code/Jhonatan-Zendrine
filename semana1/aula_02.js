/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * EXERCÍCIO 1
a.  false
b.  false
c.  true
d.  false
e.  boolean

  */
 const bool1 = true
 const bool2 = false
 const bool3 = !bool2
 
 let resultado = bool1 && bool2 && bool3
 console.log("a. ", resultado)
 
 resultado = (bool2 || bool1) && !bool3
 console.log("b. ", resultado)
 
 resultado = !resultado && (bool1 || bool1)
 console.log("c. ", resultado)
 
 resultado = (resultado && (!bool1 || bool2)) && !bool3
 console.log("d. ", resultado)
 
 console.log("e. ", typeof resultado)

/**
 * EXERCÍCIO 2

a. O que é `array` e como se declara em `JS`?

R : Array é a maneira de armazenar e acessar mais de uma informação ao mesmo tempo.
let array [] ou const array []

b. Qual o index inicial de um `array`?

R : index inicial [0]


c. Como se determinar o tamanho do `array`?

R : array.length

d. Indique todas as mensagens impressas no console.

I.  undefined
II.  null
III.  11
IV.  3 e 4
V.  19 e  9
VI.  3
VII.  1

 */

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)

/**
 *
 * EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *
 * EXERCÍCIO 1
 
a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.
 */

 const a = (77 - 32)*5/9 + 273.15
 console.log(a + " K")

 const b = (80)*9/5 + 32
 console.log(b + " ºF")

 const c = (30)*9/5 + 32
 const c1 = (c - 32)*5/9 + 273.15
 console.log(c + " ºF || " + c1 + " K")


const d = prompt ("Quantos graus Celsius deseja converter ?")
const d1 = (d)*9/5 + 32
const d2 = (d1 - 32)*5/9 + 273.15
console.log(d1 + " ºF || " + d2 + " K")

/**
 * EXERCÍCIO 2
 */
 
 const pergunta1 = prompt ("Qual seu Nome ?");
 console.log("1. Qual seu Nome ?")
 console.log("Resposta: " + pergunta1 )
 const pergunta2 = prompt ("Qual seu filme favorito ?")
 console.log("2. Qual seu filme favorito ?")
 console.log("Resposta: " + pergunta2 )
 const pergunta3 = prompt ("Gosta de Cinema ?")
 console.log("3. Gosta de Cinema ?")
 console.log("Resposta: " + pergunta3 )
 const pergunta4 = prompt ("Qual a cor dos seus olhos ?")
 console.log("4. Qual a cor dos seus olhos ?")
 console.log("Resposta: " + pergunta4 )
 const pergunta5 = prompt ("Qual pais deseja conhecer ?")
 console.log("5. Qual pais deseja conhecer ?")
 console.log("Resposta: " + pergunta5 )
 

/**
 * EXERCÍCIO 3
 * 
 Resolução 
 a.
 b.
 c.
 Estão no programa
 */

const Salario = prompt ("Quanto é o salário mínimo ?");
const Residencia = prompt ("Quantos quilowatts a residência consome ?");
const Desconto = prompt("Porcentagem de Desconto") / 100;

let valorunitario = Salario / 5
console.log("O valor de cada quilowatt-hora é = " + valorunitario)

let consumoresidencial = Residencia * valorunitario
console.log("A Residencia gastou " + consumoresidencial + " Reais no mês")

let desconto1 = consumoresidencial * Desconto

let valorfinal = consumoresidencial - desconto1
console.log("Valor a ser pago com Desconto : " + valorfinal + " reais")



/*
const nome = prompt("Qual o seu nome?")
let suasInformacoes = "Seu nome é: " +nome

const ano = prompt("Qual o ano do seu nascimento?")
const idade = 2019 - Number(ano)

suasInformacoes += ". Você terá " + idade + " anos no fim deste ano. "

console.log(suasInformacoes)

console.log(typeof nome)
console.log(typeof suasInformacoes)
console.log(typeof ano)
console.log(typeof idade)


let numero = prompt("Escreva um número qualquer : ")
let par_impar = Number(numero)%2

if (par_impar == 0)
console.log(numero + " este número é par")
else
console.log(numero + " este número é ímpar")



let numeroa = prompt("Escreva um número a : ")
let numerob = prompt("Escreva um número b : ")

if (numerob == numeroa)
console.log("b é igual a a")
else if (numeroa >= numerob)
console.log("a é maior do que b")
else
console.log("b é maior do que a")
*/







