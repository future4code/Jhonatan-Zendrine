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

let usuario = [comprarCarta(), comprarCarta()]
let computador = [comprarCarta(), comprarCarta()]
let valortotalusuario = 0
let cartas_usuario = ""
let valorcomputador = 0
let cartas_computador = ""
let comprarcarta


if(confirm("Deseja começar o BlackJack")){
  
  valortotalusuario = usuario[0].valor+usuario[1].valor
  valorcomputador = computador[0].valor+computador[1].valor
  if(valortotalusuario === 22){
   usuario = [comprarCarta(), comprarCarta()]
    
  }
  if(valorcomputador === 22){
    computador = [comprarCarta(), comprarCarta()]
  }
  // console.log(usuario) Etapas
  // console.log("Teste") Etapas
  // console.log(computador) Etapas
  // console.log("Continuando") Etapas

  comprarcarta = (confirm("Suas cartas são "+usuario[0].texto+" "+ usuario[1].texto+". A carta revelada do computador é "+computador[0].texto+". Deseja comprar mais uma carta ?"))


  valortotalusuario = usuario[0].valor + usuario[1].valor;
  cartas_usuario = usuario[0].texto + usuario[1].texto;
      

    // valortotalusuario = 0
    // cartas_usuario = ""

  for (;comprarcarta && valortotalusuario <21;){
    // aqui tenho que programar enquanto o usuario quiser comprar cartas
    valortotalusuario = 0
    cartas_usuario = ""
    valorcomputador = 0
    cartas_computador = ""
    usuario.push(comprarCarta());
    for (let i=0; i < usuario.length; i++){
      valortotalusuario += usuario[i].valor;
      cartas_usuario += usuario[i].texto;
    }
    if (valortotalusuario>21){
        valorcomputador = computador[0].valor + computador[1].valor
        cartas_computador = computador[0].texto+ computador[1].texto
        console.log("O Usuario estourou !!!")
        comprarcarta = false
        }
    if (valortotalusuario<21){

    valortotalusuario = 0
    cartas_usuario = ""

    for (let i=0; i < usuario.length; i++){
      valortotalusuario += usuario[i].valor;
      cartas_usuario += usuario[i].texto;
    }

    
    comprarcarta = (confirm("Suas cartas são "+cartas_usuario+". A carta revelada do computador é "+computador[0].texto+". Deseja comprar mais uma carta ?"))
    
    }
    if(valortotalusuario === 21 ){
      comprarcarta = false
    }

  }
//Depois do for

  if(valortotalusuario>21){
    
    console.log("O usúario perdeu "+cartas_usuario+" somando "+ valortotalusuario + ". Enquanto o computador tinha "+cartas_computador+ " somando "+valorcomputador)
    alert("O usúario perdeu "+cartas_usuario+" somando "+ valortotalusuario + ". Enquanto o computador tinha "+cartas_computador+ " somando "+valorcomputador)
  }
  if(valortotalusuario === 21){
    //console.log("Valor = 21 do usuario")
    valorcomputador = 0
    cartas_computador = ""
    for (let i=0; i < computador.length; i++){
      valorcomputador += computador[i].valor;
      cartas_computador += computador[i].texto;
    }

    for (;valorcomputador < 21;){

      valorcomputador = 0
      cartas_computador = ""
      computador.push(comprarCarta());
      for (let i=0; i < computador.length; i++){
      valorcomputador += computador[i].valor;
      cartas_computador += computador[i].texto;
    }
    if(valorcomputador > 21 || valorcomputador === 21){
      if(valorcomputador >21){
        console.log("O usúario ganhou com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
        alert("O usúario ganhou com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
      }
      if(valorcomputador === 21){
        console.log("Empate !!!! As cartas do usúario são : "+cartas_usuario+ " totalizando : "+valortotalusuario + " . Cartas do computador são : "+cartas_computador + " totalizando : "+valorcomputador)
        alert("Empate !!!! As cartas do usúario são : "+cartas_usuario+ " totalizando : "+valortotalusuario + " . Cartas do computador são : "+cartas_computador + " totalizando : "+valorcomputador)
      }
    }
    
    }
    
  }
  if(valortotalusuario<21){
    //console.log("Menor que 21")

      valorcomputador = 0
      cartas_computador = ""
      for (let i=0; i < computador.length; i++){
      valorcomputador += computador[i].valor;
      cartas_computador += computador[i].texto;
    }

     for(;valorcomputador <= valortotalusuario;){

      valorcomputador = 0
      cartas_computador = ""
      computador.push(comprarCarta());
      for (let i=0; i < computador.length; i++){
      valorcomputador += computador[i].valor;
      cartas_computador += computador[i].texto;
    }
    if(valorcomputador > 21){
       console.log("O usúario ganhou com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
       alert ("O usúario ganhou com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
    }
    if(valorcomputador === 21){
      console.log("O usúario perdeu com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
      alert("O usúario perdeu com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
    }
    
    }
    if(valorcomputador > valortotalusuario && valorcomputador < 21){
      console.log("O usúario perdeu com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
      alert("O usúario perdeu com as cartas "+ cartas_usuario + " totalizando : " + valortotalusuario + " Pontuação. Enquanto o computador estourou fazendo " + valorcomputador + " com as cartas "+ cartas_computador)
    }


  }


  //console.log("Saindo do for ")
  //Aki tenho qeu programar assim que o usuario não quiser mais comprar cartas.

}
else{
  console.log("Jogo cancelado")
}



// comprarcarta = (confirm("Suas cartas são "+usuario[0].texto+" "+ usuario[1].texto+". A carta revelada do computador é "+computador[0].texto+". Deseja comprar mais uma carta ?")) // Não posso colocar let na Variavel se não a desgraça conta como nova variavel e da erro.