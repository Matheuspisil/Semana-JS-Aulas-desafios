<h1>Semana Javascript</h1>

## Aprendendo sobre: map , filter e reduce.

### Conceitos:

#### Array.prototype.map()<br>
O map()é o método que cria uma nova matriz preenchida com os resultados da chamada de uma função fornecida em cada elemento na matriz de chamada.<br>
<p>
Exemplo: <br>
Mapeando uma matriz de números para uma matriz de raízes quadradas<br>
O código a seguir pega uma matriz de números e cria uma nova matriz contendo as raízes quadradas dos números na primeira matriz.<br>

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));<br>

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
</p><br>
#### Array.prototype.filter()<br>
O filter()método cria uma cópia superficial de uma parte de uma determinada matriz, filtrada apenas para os elementos da matriz especificada que passam no teste implementado pela função fornecida.<br>

##### Exemplo<br>
Filtrando todos os pequenos valores
O exemplo a seguir usa filter()para criar uma matriz filtrada que tem todos os elementos com valores maior ou igual a 10.<br>

~~~
function isBigEnough(value) {
  return value >= 10;
}<br>
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
~~~
// filtered is [12, 130, 44]<br>

<br>

#### Array.prototype.reduce()
O método reduce() executa uma função reduzir (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

##### Exemplos<br>
Soma todos os valores de uma array<br>
~~~
let total = [0, 1, 2, 3].reduce(function(acumulador, valorAtual) {
   return acumulador + valorAtual;
 }, 0)
 ~~~
// retorna 6<br>

outra alternativa é usar uma arrow function:<br>
~~~
var total = [ 0, 1, 2, 3 ].reduce(
  ( acumulador, valorAtual ) => acumulador + valorAtual,
  0
);
~~~
<br>


## Referências:
:world_map: [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)<br>
:fountain: [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)<br>
:chess_pawn: [Reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)<br>


