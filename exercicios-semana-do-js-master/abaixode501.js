const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691];

const abaixo501 = crazyNumbers.reduce(
  (accumlator, crazyNumber) =>
    crazyNumber < 501 ? accumlator + 1 : accumlator,
  0
);
/*acima opção simplicicada e concisa
  abaixo opção ternaria acima funciona da mesma maneira que a de cima
 return crazyNumber < 501 ? accumlator + 1 : accumlator
    

     if (crazyNumber < 501) {
         return accumlator + 1
     }
     return accumlator
*/

console.log(abaixo501);
