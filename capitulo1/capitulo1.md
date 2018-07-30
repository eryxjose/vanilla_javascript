# Tipos no Javascript 

* Number
* String
* Boolean
* Symbol (ECMAScript6)
* Object
  - Function
  - Array 
  - Date
  - Regular Expression
* Null
* Undefined

# Declaração de variáveis

* O comando var é utilizado para declarar uma variável de qualquer um dos tipos listados acima, e você pode alterar o tipo de informação armazenada. Veja alguns exemplos:

var x = 1;

* A declaração da variável x com o valor 1 está sendo utilizada para demonstrar a maneira mais simples de criar uma variável e ao mesmo tempo definir seu valor inicial que poderá ser alterado posteriormente. Você também pode declarar a variável (x em nosso exemplo) sem atribuir um valor inical. Veja a seguir:

var x;

* Você pode alterar o valor da variável x por um valor literal ou por uma chamada de função que retorne um valor. Veja alguns exemplos:

x = 12; // Atribui o valor 12 a valirável x.
x = 12 + 3; // Atribui o resultado da soma dos valores 12 e 3.
x = function () { return 3; } // Necessário x() para obter o valor.
x = (function () { return 3; })(); // Alternativa auto-executável.
x = "abc"; // Alterando o valor da variável x para string "abc".
x = [2,44,14,89,41,63]; // Array de números
x = ["a","b","c"]; // Array de strings
x = [{id:1,titulo:'a'},{id:2,titulo:'b'},{id:3,titulo:'c'}]; // Array de objetos

* ...

# Definição de Programação Orientada a Objetos 

A programação orientada a objetos é um conceito ou abordagem de desenvolvimento de software que fornece orientações para criação de objetos que ocultem os detalhes de implementação através das respectivas propriedades e métodos. 

Os princípios fundamentais definidos no livro Design Patterns: Elements of Reusable Object-Oriented Software (Gang of Four):

* Programe para interfaces e não para implementações
* Composição de objetos preferencialmente em relação a herança de classes

# Funções


# Módulos

* ES Modules

Antes da versão 6 do ECMAScript, módulos são definidos utilizando o padrão denominado IIFE (Immediately Invoked Function Expression) ilustrado abaixo.

(function() {
  "use strict";
  
})();

- Exports

O ECMAScript 6 dispensa o uso de IIFE's porque os módulos possuem isolamento de escopo automaticamente.

  function work(name) {
    return ´${name} is working´;
  }

  class Person {
    constructor(name) {
      this.name = name;
    }
    doWork() {
      return work(this.name);
    }
  }

  export {work, Person}
  export default Person

- Imports

import {Person, Animal} from "./lib"
import HumanPerson from "./lib/humans"
import * as lib from "./lib"

- Building Modules

  webpack
  Rollup
  Closure
  browserfy

* Arrow Sintaxe

Exemplo 1

  const square = x => x * x;
  const add = (x, y) => x + y;
  const log = result => {
    console.log(result);
    return result;
  };
  const result = log(square(add(3,5)));

Exemplo 2 - O exemplo abaixo mostra o uso de arrow function passada como parâmetro para função map.

  const numbers = [1,2,3];
  const result = numbers.map(n => n * 2);

* Referências

JavaScript Patterns for 2017 - Scott Allen
https://www.youtube.com/watch?v=hO7mzO83N1Q

* Módulos

- Referências
https://github.com/DavidVujic/vanillajs-components/blob/master/src/app.js#L19