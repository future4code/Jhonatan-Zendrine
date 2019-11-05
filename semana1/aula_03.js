
//|-------------------------------|
//|Exercicios apartir da linha 101|
//|-------------------------------|

/*console.log(1 === 1)
let comparador = 2 === 1
console.log(comparador)

comparador = 2 !== 1
console.log(comparador)


let condicao = true

if(condicao){
  console.log("Entrei no primeiro if")
  }
condicao = false
if(condicao){
  console.log("Entrei no segundo if")
}


let numeroa = Number(prompt("Escreva o priemiro número: "))
let numerob = Number(prompt("Escreva o segundo número: "))

if (numeroa === numerob){
console.log("primeiro é igual ao segundo")
}
else if (numeroa > numerob){
console.log("primeiro é maior do que o segundo")
}
else{
console.log("primeiro é menor do que o segundo")
}


let paisDeOrigem

switch (paisDeOrigem){
  case "Brasil":
  console.log("brasileiro")
  break;

  case "EUA":
  console.log("norte americano")
  break;

  case "Inglaterra":
  console.log("inglês")
  break;

  default:
  console.log("não se sabe a nacionalidade")
  break;



let estadoDeOrigem = prompt("Qual estado você nasceu : ")

switch (estadoDeOrigem){

  case "SP":
  console.log("paulista")
  break;

  case "RJ":
  console.log("fluminense")
  break;

  case "PR":
  console.log("paranaense")
  break;

  case "AC":
  console.log("acriano")
  break;

  case "AL":
  console.log("alagoano")
  break;

  default:
  console.log("não se sabe a naturalidade")
  break;

}
*/

// const concluiu = prompt("Concluiu ensino medio ? [S/N]")
// const idade = Number(prompt("Qual sua idade ?"))
// const facul = prompt("Está cursando outra faculdade ? [S/N]")

// if (concluiu === "S" && idade >= 18 && facul === "N"){
//      console.log("aprovado")
//   }
//   else{
//     console.log("reprovado")
//   }

// Exercicios

// 1.
// Explique o que o código faz. 
// O código solicita ao usuario que digite 1 número de sua escolha e ebtão comunica se ele passou ou não passou no teste.
// Qual o teste que ele realiza?
// Resposta: O codigo realiza o teste se o numero é par ou impar
// Para que tipos de números ele imprime no console "Passou no teste"? 
// Resposta: Apenas para números pares
// Para que tipos, a mensagem é "Não passou no teste"?
// Resposta: Apenas para números ímpares

const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}


// 2.


let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

let final = (2*3.5)+2.25+(3*5)+0.30

console.log("R$ " + final)


// a. Para que serve o código acima?
// Resposta: O código solicita para o usuario escolher uma fruta e depois dessa escolha se a fruta constar no sistema ela envia o valor da mesma.

// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// Resposta: O preço da fruta  Maçã  é  R$  2.25


// c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
// Resposta: Total seria R$ 24.55
// let final = (2*3.5)+2.25+(3*5)+0.30
// console.log("R$ " + final)

// d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
// Resposta : O preço da fruta  Pêra  é  R$  5

// 3.
/*
const numero10 = prompt("Digite o primeiro número.")
const numero20 = prompt("Digite o próximo número?")

if(numero10 > 0 && numero20 > 0) {
  let mensagem
  if(numero10 > numero20) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)
*/


// Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
// Resposta: ReferenceError: mensagem is not defined . Sim. Ocorreu este erro pois a variavel mensagem vou declarada apenas dentro do bloco do if"pai" {} , então a mesma só podera ser utilizada dentro de funções do bloco aonde foi declarada, porem se utilizar em vez de 'let' usar 'var' ela se torna global.

//_____________________________________________________________________________________________________

//  1.
// a. Crie um programa que receba dois números do usuário através do `prompt` e imprima-os na ordem **decrescente**. O que acontece com o seu programa se os 2 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
// Resposta: Ele imprime normalmente porem se eu utilizar o >= ele imprime o if se eu só deixar > para a comparação ele imprime o else


const numero1 = Number(prompt("Digite o primeiro número."))
const numero2 = Number(prompt("Digite o segundo número?"))
const numero3 = Number(prompt("Digite o terceiro número?"))

if (numero1 > numero2){
  if(numero1 > numero3){
    if(numero2 > numero3){
      console.log(numero1 +"  "+ numero2+ "  "+numero3 )
    }
    else{
      console.log(numero1 +"  "+ numero3+ "  "+numero2 )
    }
  }
  else{
    console.log(numero3 +"  "+ numero1+ "  "+numero2 )        
  }
}
else{
  if(numero1 > numero3){
    console.log(numero2 +"  "+ numero1+ "  "+numero3 )
  }
  else if (numero2 > numero3){
    console.log(numero2 +"  "+ numero3+ "  "+numero1 )
  }
  else if(numero3 > numero2) {
    console.log(  numero3 +"  "+ numero2+ "  "+numero1 )
  }
  else{
    console.log("Digite pelo menos 1 dos valores diferentes")
  }
}



// b. Adapte o programa para que o usuário digite 3 números. Ainda os imprima na ordem **decrescente**. O que acontece como seu programa se os 3 números forem iguais? (é só testar e colocar um comentário descrevendo o que aconteceu)
// Resposta: Se todos os 3 forem iguais ele cai no ultimo "else" novamente


// c. Agora, impeça que o usuário digite 3 números iguais. Caso todos sejam iguais, mostre um aviso ao usuário indicando que ele deve, ao menos, inserir um número diferente.
// Resposta: Código realizado com sucesso segue acima.

// _____________________________________________________________________________________________________

// 2.
//
// a. Escreva o diagrama esquemático que melhor represente a árvore condicional do exercício em si. (Coloque a imagem do esquema no drive e gerem um link de compartilhamento público. Coloque este link num comentário durante a resolução deste exercício)
// Resposta: "encurtador.com.br/fnLQ5" ou o link completo abaixo.

// https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7Vtbc5s4FP41fmwHJAH2o3PZpjubbabZmSRPO7KRbe1i5BGyY%2FfXrwBhLAQOqW0gZfuQomMhxHdun47EAF4vt184Xi3umU%2BCAbD87QDeDAAAFhrK%2F2LJLpV4mWDOqZ%2BK7FzwSH8QJbSUdE19EmkdBWOBoCtdOGVhSKZCk2HO2avebcYC%2FakrPCeG4HGKA1P6RH2xSKVD4OXyO0Lni%2BzJtjtKf1nirLN6k2iBffZ6IIK3A3jNGRPp1XJ7TYIYvAyX9L7fKn7dT4yTUNS54fd7a%2FPMttM7l0%2Be%2Fr56fnmiwSeUjrLBwVq9sJqs2GUIEF8CopqMiwWbsxAHt7n0irN16JP4MZZs5X3%2BYGwlhbYU%2FkOE2Cnt4rVgUrQQy0D9mj4zflDluylRxNZ8So68UGYjmM%2BJONIP7DUgTZewJRF8J%2B%2FjJMCCbvR5YGVD832%2FHGZ5oZB%2BB%2BrAhP3PwTUcDOE3A35BtkJHi5OI%2FsCTpEMM%2BIrRUCRTdK4Gzo2U4IDOQymYSvgIl4IN4YJKox6rH5bU9xPVBXhCgis8%2FXeeKPGaBYwnz4Wz5N9eOfEIZFvmcmomuaEfqq3a6Ezs1eifrM%2FIshVCO%2B2JtbWjBn%2BIkTnowmazSFpFUX37Ofy8Rt2%2B%2BpFzoh8lt445x7uDDsqiTUUqE0E21M3Ds%2FXQ977%2B8iKdwVlNInOHA5t4%2FHrfB%2F923%2FJv4A51%2F3ZP8%2B9sZFcbNGte3vttQ9MPLIrWVMq%2BRRGLDKXzBVtO1nJeV68LKsjjCifO%2BCo5VJlHlyjH8OlKvCHSjX%2Bo1Pia0xkbKdnigMpk%2Fc6f%2FQy0vobJG064ZEglYGlh8fKA2ZmhK8BGJYCBEsDcSwFmm5Gkjewi4eO75%2Fj%2Bz07WfFHDJY2brdbaqdYZs5JTMyt558hKRnyxoaMZBoAFjafzUnedP8wAM870JKPYVrlC85Rie95pOeTyWQKM%2Fnfj97kxOAu7NPzYcfWM2LQfQzOe92n5l%2FrBMWd2RtZQp3KdXwA6hkr3FPCBBB2jgHYZpWmUA9q%2FXOHJqxnT0qVoa5Unk3z3hUK8WXWyh10PMtkMu8IgbI0%2F5HTi8gyitrddhkHs13oqoCK7HoN4b6ELuE7hOU0UrmCv6UnqZJWBQsaJUZa9uhspPDNQxBqUzMv6jqc0dvdWGQmwdAcCXgkjgY0yEtPqH6V1AutuvcQhM9FquCpVKEqVlvGarUqZlPceL2MzG9%2FMCJeIWWHSgqyzKMLWUYQmIWsjpZ8xNYO6q3tYoapmmDA0zbcnTDg1ueP7M66n%2BUnnl9%2BwG%2BvJDtTWarsfqNimO5EaI6cQYmsW1969B1zxnItSY2ju8%2FeJGsM319AQgkJt9USqnA0NnNJhG6jaH63shbjdyh4aFWhh65U92I0axTkjqluX0Jy67Xga8Ob2Uq9i0%2FFle1zfg9nZzI%2FCaoCZbsYhXcZrd%2BsvwqXOBCetxp%2F9AqpYCGst%2FiBzHf%2FR40%2FdYieqIPbNxB9kUvCeLKhQxZbOwYLKKhwd6XzoQb%2Fcidb6bnTqnsFpbmSWbvuUxtHbh0fBhzscAEydPuBIWmyKiJA53PLxALhBrM4Jl1fz%2BGpDY6kVxn%2BSUqo9X%2BN2831hQ8pxSvK91%2Bh6wzwUN96UkKKGC81ugRhBq%2FVKc4kRErrtAFSFvSAE2oYqI6xHk1%2Foj%2BPvy%2BJQGkhnptPzlALJloqD22TrJRtRXuc3xY1LlA%2FrLnZBxWL3QGlOic4y2alVRqTbjIMKtpC%2BqFFlNAcqFFD27YbOAqLenulFb57pdSy78EVH5zM9AmY2CmfppuiEtr%2F%2FaRfM3XFbj7VmffV7gtdoJWjJIYWGAXMaBEw288%2BBU4vMP6qGt%2F8B

// b. Escreva um programa que realize estas perguntas  e indique a classificação final considerada. As opções são: ser humano; mamífero não humano; ave; réptil; anfíbio; peixe ou é invertebrado


const ossos = prompt("O Animal Possui Ossos ? [S/N] ")

if (ossos === "S"){
  const pelos = prompt("Possui Pelos ? [S/N] ")
  if (pelos === "S"){
    const racional = prompt("É Racional ? [S/N] ")
    if (racional === "S"){
      console.log("Ser Humano")
    }
    else{
      console.log("Mamífero não Humano")
    }
  }
  else{
    const penas = prompt("Possui Penas : [S/N]")
    if(penas === "S"){
      console.log("Ave")
    }
    else{
      const terrestre = prompt("Animal terrestre ? [S/N] ")
      if (terrestre === "S"){
        const parteagua = prompt("Passou parte da vida na água? [S/N]")
        if(parteagua === "S"){
        console.log("Anfíbio")
        }
        else{
          console.log("Réptil")
        }
      }
      else{
        console.log("Peixe")
      }
    }
  }
  }
  else{
    console.log("Invertebrado")
  }


// _____________________________________________________________________________________________________

// 3.
// Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. Para esta compra, o usuário deve fornecer algumas informações:
// - Nome completo;
// - Tipo de jogo: IN indica internacional; e DO indica doméstico;
// - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
// - Categoria: pode ser as opções 1, 2, 3 ou 4;
// - Quantidade de ingressos

// O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser dados em dólar (considerar a cotação de U$1,00 = R$4,10)

const nome = prompt("Nome Completo : ")
const tipojogo = prompt("Tipo do Jogo IN para internacional e DO para doméstico")
const jogo = prompt("Qual jogo SF(Semi-final), DT(Terceiro Lugar), FI(Final)")
const categoria = Number(prompt("Categoria 1, 2, 3 ou 4"))
const quantidade = Number(prompt("Quantos ingresos deseja ?"))
let valor
let valortotal
let valordollar
let valortotaldollar

if (tipojogo === "DO"){
  if (jogo === "SF"){
    switch (categoria){
      case 1:
      valor = 1320
      break;
      case 2:
      valor = 880
      break;
      case 3:
      valor = 550
      break;
      case 4:
      valor = 220
      break;

    }
  }
  else if(jogo === "DT"){
    switch (categoria){
      case 1:
      valor = 660
      break;
      case 2:
      valor = 440
      break;
      case 3:
      valor = 330
      break;
      case 4:
      valor = 170
      break;

    }

  }
  else if(jogo === "FI"){
    switch (categoria){
      case 1:
      valor = 1980
      break;
      case 2:
      valor = 1320
      break;
      case 3:
      valor = 880
      break;
      case 4:
      valor = 330
      break;

    }
  }
  valortotal = valor*quantidade
  console.log("---Dados da compra---")
  console.log("Nome do cliente : "+ nome)
  console.log("Tipo do jogo : Nacional")
  console.log("Categoria : " + categoria)
  console.log("Quantidade de ingressos : "+ quantidade + " ingressos")
  console.log("---Valores---")
  console.log("Valor do ingresso : R$ " + valor)
  console.log("Valor total : R$ " + valortotal)

}
else  if (tipojogo === "IN"){
  if (jogo === "SF"){
    switch (categoria){
      case 1:
      valor = 1320
      break;
      case 2:
      valor = 880
      break;
      case 3:
      valor = 550
      break;
      case 4:
      valor = 220
      break;

    }
  }
  else if(jogo === "DT"){
    switch (categoria){
      case 1:
      valor = 660
      break;
      case 2:
      valor = 440
      break;
      case 3:
      valor = 330
      break;
      case 4:
      valor = 170
      break;

    }

  }
  else if(jogo === "FI"){
    switch (categoria){
      case 1:
      valor = 1980
      break;
      case 2:
      valor = 1320
      break;
      case 3:
      valor = 880
      break;
      case 4:
      valor = 330
      break;

    }
  }
  valortotal = valor*quantidade
  valordollar = valor/4.10
  valortotaldollar = valordollar*quantidade
  console.log("---Dados da compra---")
  console.log("Nome do cliente : "+ nome)
  console.log("Tipo do jogo : Internacional")
  console.log("Categoria : " + categoria)
  console.log("Quantidade de ingressos : "+ quantidade + " ingressos")
  console.log("---Valores---")
  console.log("Valor do ingresso : U$ " + valordollar)
  console.log("Valor total : U$ " + valortotaldollar)

}










