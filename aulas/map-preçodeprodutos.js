/* 
você recebeu um array de preços de produtos e precisa gerar um novo array com esse preços em promoção,
todos os produtos pela metade do preço.
*/

const prices = [20, 10, 30, 25, 15, 30, 80, 5];

const promoprice = prices.map((price) => price / 2);

console.log(promoprice);
