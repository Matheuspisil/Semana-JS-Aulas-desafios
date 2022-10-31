/*
quando vc deve usar o filter?

Quando vc precisa obter um novo array, com uma quantidade de itens menor que a do array original

ex:
[1,2,3], [1,2] menor que 3

Recebi numeros aleatório com escala 0 -100 e exibir somente os numeros maiores que 37
*/

const radomnumbers = [36, 99, 37, 63];

const numerosacima37 = radomnumbers.filter((item) => item > 37);

console.log(numerosacima37);
