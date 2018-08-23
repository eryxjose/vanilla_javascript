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
