//EX 1:
    //função com 2 numeros retornando o maior.
// let resultado; 
// function retornarMaior(a,b){
//     if (a > b){
//         resultado = a;
//     }
//     else{
//         resultado = b;
//     }
// }
// retornarMaior(1,5);
// console.log(resultado);
//----------------------------------
// let valorMaior = max(1,3);
// console.log(valorMaior);

// function max(a,b){
//     if(a > b)
//     return a;
//     else return b;
// }
//ou-- return a > b ? a : b;
//--------------------------------------------------------------------
//EX 2:
    //Fizzbuzz = if divisivel por 3 = fizz, if divisivel por 5 = buzz
//ambos 3 e 5= FizzBuzz, n divisivel por ambos = valor de entrada.
//n for numero = 'Não é um número'.
// const resultado = fizzBuzz(22);
// console.log(resultado);

// function fizzBuzz(entrada){
//     if (typeof entrada !== 'number'){
//         return 'Não é um número';
//     }
//     else if(entrada % 5 === 0 && entrada % 3 === 0 ){
//         console.log('FizzBuzz');
//     }
//     else if(entrada % 5 === 0){
//         console.log('Buzz');
//     }
//     else if(entrada % 3 === 0 ){
//         console.log('Fizz');
//     }
//     else{
//         return entrada
//     }
// }
//--------------------------------------------------------------------
//EX 3:
    //Medidor de velocidade:
    //Velocidade Max: 70 km
    //a cada 5 km do limite ganha 1 ponto na carteira.
    //caso pontos da carteira > 12 = "Carteira suspensa".

//     verificarvelocidade(180);
// function verificarvelocidade (velocidade){
//     const velocidadeLimite = 70;
//     if(velocidade > velocidadeLimite) {
//         console.log('Você recebeu uma multa');
//         let pontos = Math.floor((velocidade - velocidadeLimite) / 5);
//         console.log(pontos);
//     if(pontos > 12){
//         console.log('Carteira suspensa');
//     }
//     }
// }
//--------------------------------------------------------------------
//EX 4:
    //Par ou impar exibindo uma quantidade de valores.

// exibirtipo(10);
// function exibirtipo(valor){
//     for(i = 0; i <= valor; i++){
//     if(i % 2 !== 0){
//         console.log(i, 'impar')
//     }
//     else {
//         console.log(i, 'par')
//     }
// }
// }
//--------------------------------------------------------------------
//EX 5:
    //Criar um método para ler propriedades de um objeto e exibir apenas string.

// const pessoa = {
//     nome: 'Leonardo',
//     sobrenome: 'teste',
//     ano: 1999
// }

// exibir(pessoa);
// function exibir(obj){
//     for (prop in obj){
//     if(typeof obj[prop] === 'string'){
//         console.log(prop,obj[prop]);
//     }
//  }
// }
//--------------------------------------------------------------------
//EX 6:
    //Criar uma função que de múltiplos de 3 e 5 e soma todos.

// somar(10);
// function somar(valorMax){
//     let multD3 = 0;
//     let multD5 = 0;

//     for(i = 0; i <= valorMax; i++){
//         if(i % 3 === 0){
//             multD3 += i;
//         }
//         if(i % 5 === 0){
//             multD5 += i;
//         }
//     }
//     console.log(multD3 + multD5);
// }
//--------------------------------------------------------------------
//EX 7: 
    //criar um endereço com rua,cidade e cep.


// function Endereco(rua,cidade,cep){
//     this.rua = rua,
//     this.cidade = cidade,
//     this.cep = cep
// }
// const endereco1 = new Endereco('João Alberto','Testilda',12990333)
// console.log(endereco1);
//--------------------------------------------------------------------
//EX 8: 
    //Criar objeto de postagem de blog com as seguintes props:
        //titulo,mensagem,autor,visualizações, comentários(autor,mensagem), estaAoVivo.

// let postagem = {
//     titulo: 'Testando',
//     mensagem: 'TestandoMSG',
//     autor: 'Albert',
//     visualizacoes: 2000,
//     comentarios: [{autor: 'Fulano',mensagem:'abcd'}],
//     estaAovivo: true
// }
// console.log(postagem);
//--------------------------------------------------------------------
//EX 9:
    //Array de objetos de faixa de preço.

// let faixas = [
//     {tooltip:'Até R$ 700,00', minimo:0, máximo:700},
//     {tooltip:'De R$ 700,00 Até R$ 1400,00', minimo:700, máximo:1400},
//     {tooltip:'De R$ 1400,00 Até R$ 2000,00', minimo:1400, máximo:2000}
// ];