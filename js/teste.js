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


   let novaString = "";
   let contadorDecrecente = cpf.length -1;
   let multiplicador = 2;
   let valorTemporario = 0;

   for (let i = 0 ;  i < cpf.length; i++) {
      // pega a ultima posição do array e guarda na variavel 
      let digito = cpf[contadorDecrecente];
      valorTemporario = multiplicador * digito;
      novaString += valorTemporario;
      contadorDecrecente = contadorDecrecente - 1;
      multiplicador = multiplicador + 1;


   }
       return novaString;

}



 let texto = calculaOPrimeiroDigitoVerificador("777");

 console.log(texto);