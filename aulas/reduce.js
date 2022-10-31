/*
quando vc deve usar o reduce?

quando baseado no array original você precisa reduzir o array a um valor.

[1,2,3] obter a soma de todos os numeros preciso reduzir esse array a um unico valor = 6
reduzir todos os numeros de slots de itens do array em um só, um total de todos os arrays 

etenda o seguinte no reduce
da mesma forma que map e filter o reduce sempre precisa retornar um valor...
*/

const numeros = [2, 5, 7];

const sumResults = numeros.reduce((accumulator, item) => accumulator + item, 0);

console.log(sumResults);
