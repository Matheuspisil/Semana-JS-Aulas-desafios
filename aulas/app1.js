/*

Quando você deve usar o map ?
Quando vc precisa obter um novo array, com a mesma quantidade de itens do array original.

[1,2,3], [3 , 6, 9] precisa obter o triplo de cada numero.

regra do map, filter ou reduce. função sempre deve retornar um valor.
O it, for, são objetos de efeito colateral no qual é para mudanças e verificação, map, filter e reduce devem exibir
sempre um resultado.

uma maneira de deixar o codigo bem limpo e ainda assim manter o mesmo resultado abaixo
"const doublenumbers = numbers.map(item =>  item * 2)" sem bloco, sem return e mesmo resultado,
importante saber que a ferramenta map, ela não muda o array original, ela retorna um novo array
seu codigo fica mais consiso e limpo, bom para evitar bugs que se alojam em estados mutáveis,
codigo imutável não da problemas em varias linhas de frente.


*/
const numbers = [1, 2, 3];

const doublenumbers = numbers.map((item) => {
  return item * 2;
});
console.log(doublenumbers);
