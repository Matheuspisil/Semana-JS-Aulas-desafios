/* 
recebeu um array de produtos e vc precisa obter um novo array com produtos acima de 30, a custar, metade do preço
*/
const products = [
  { name: "Mouse Sem Fio", price: 30 },
  { name: "Pen Drive", price: 25 },
  { name: "Cartucho de Tinta", price: 50 },
  { name: "Suporte Ergonômico para Notebook", price: 23 },
  { name: "Repetidor de Sinal Wi-Fi", price: 44 },
];

const saleproducts = products.map((product) => {
  if (product.price >= 30) {
    return {
      name: product.name,
      price: product.price / 2,
    };
  }
  return product;
});
console.log(saleproducts);
