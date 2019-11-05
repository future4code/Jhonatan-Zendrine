import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta();
let carta1 = comprarCarta();
let computador= comprarCarta();
let computador1= comprarCarta();
let pontosjg1 = carta.valor+carta1.valor;
let pontoscomputador = computador.valor+computador1.valor;



if(confirm("Vamos começar o BlackJack ?")) {
  console.log(carta.texto + "  " + carta1.texto + " -  pontuação = "+ pontosjg1 )

  console.log(computador.texto + "  " + computador1.texto + " -  pontuação = "+ pontoscomputador )

  if(pontosjg1 > pontoscomputador){
  console.log("o usúario ganhou!")
  }
  else if(pontosjg1 === pontoscomputador){
    console.log("Empate!")
  }
  else {
    console.log("O computador ganhou")
  }

} 
else {
  console.log("O Jogo acabou")
	// o que fazer se o usuário clicar "cancelar"
}




// console.log(carta.texto)
// console.log(carta.valor)
