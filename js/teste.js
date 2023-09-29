


/*
   
   1 passo - Separar todos os digitos do cpf

   2 passo - Multiplicar cada um dos numeros da direita para esquerda

   3 passo - Somar cada um dos resultados

   4 passo - retornar o digito verificador

   5 passo - retornar o segundo digito verificador

   6 passo - comparar os dois digitos verificadores se correpondem ao calculo adiciona digito verificador

   fonte  site https://www.macoratti.net/alg_cpf.htm
*/



pegaOUltimoNumero("456");


function pegaOUltimoNumero(numero) {

            
   let ultimoNumeroIndice = numero.length - 1; 

   let   pegaOUltimoElemento = 0;

   for(let i = numero.length - 1 ; i >= 0 ; i-- ) {

       pegaOUltimoElemento = numero[ultimoNumeroIndice];
      

   }
      console.log(pegaOUltimoElemento);
     return pegaOUltimoElemento;

}



 // teste
function validadorDeCpf(cpf) {

    

// a função separaOsDigitosDocpf retorna um array de String

let s = separaOsDigitosDoCpf(cpf);
let mu = multiplicaOsDigitosDoCpfEmOrdemDecrescente(s);
let soma = somaDigitosDoCpf(mu);
let dig = adicionaODigitoVerificador(soma, s);


// dig2 é o cpf com o primeiro digito adicionado
let dig2 = dig;
let mu2 = multiplicaOsDigitosDoCpfEmOrdemDecrescente(dig2);
let soma2 = somaDigitosDoCpf(mu2);
let cpfComDigVerificador = adicionaODigitoVerificador(soma2 , dig2 );



}




function removerCaracteresEspeciais(str) {
   let novaStr = "";
   for (let i = 0; i < str.length; i++) {
      let caractere = str[i];
      if (caractere.match(/^[a-zA-Z0-9 ]$/)) {
         novaStr += caractere;
      }
   }
   return novaStr;
}

function calculaOPrimeiroDigitoVerificador(cpf) {


   let novaString = [];
   let contadorDecrecente = cpf.length - 1;
   let multiplicador = 2;
   let valorTemporario = 0;

   for (let i = 0; i < cpf.length; i++) {
      // pega a ultima posição do array e guarda na variavel 
      let digito = cpf[contadorDecrecente];

      valorTemporario = multiplicador * digito;

      novaString.push(valorTemporario);



      contadorDecrecente = contadorDecrecente - 1;
      multiplicador = multiplicador + 1;


   }
   return novaString;

}



function separaOsDigitosDoCpf(cpf) {
   let novaString = [];

   for (let i = 0; i < cpf.length; i++) {

      novaString[i] = cpf[i];
      console.log(novaString[i]);


   }

   console.log(novaString);
   return novaString;

   

}


// retorna a soma de todos os digitos em ordem decrescente
// a função recebe um array de inteiros  somaDigitosDoCpf( int[] multiplicador )  
function somaDigitosDoCpf(multiplicador) {

   let soma = 0;



   for (let i = 0 ;  i < multiplicador.length ;  i++) {

      let valorTemporario = multiplicador[i];

      soma = soma + valorTemporario;
   }
   return soma;


}




function adicionaODigitoVerificador(soma, separador) {


   let digitoEncontrado = 11;

   let somaDosDigitosDecrescente = soma;

   let calculo = somaDosDigitosDecrescente % 11;

   if (calculo < 2) {
      digitoEncontrado = 0;
      separador.push(digitoEncontrado);
      return separador;

   } else if (calculo >= 2) {
      let result = digitoEncontrado - calculo;
      separador.push(result);
      return separador;

   }


}




//  multiplicaOsDigitosDoCpf( String[] separador ) :int[] novoNumero 

function multiplicaOsDigitosDoCpfEmOrdemDecrescente(separador) {

   let multiplicador = 2;
   let novoNumero = [];

   for (let i = separador.length - 1 ; i >= 0 ; i--) {

      // pega o conteudo da ultima posição do array e vai descendo 
      let digito = separador[i];

      // multiplica cada digito 
      let result = multiplicador * digito;

      // guarda o valor multiplicado em um novo array
      novoNumero[i] = result;


      // a cada repitição do laço o multiplicador recebe +1
      multiplicador++;

   }

   // retorna o novo array com os valores multiplicados
   return novoNumero;

}
