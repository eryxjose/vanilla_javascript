
# JavaScript


# Configurações de ambiente

* Instale o NodeJS disponível para download em https://nodejs.org/en/ 
* Instale o git disponível em https://git-scm.com/book/en/v2/Getting-Started-Installing-Git 
* Instale o VSCode disponível em https://code.visualstudio.com/
* Instale a extensão Live Server no VSCode
* Crie uma pasta para seus projetos (ex.: c:\projetos)
* Faça um clone git ou download do repositório de exemplos utilizando o comando abaixo 


# Fundamentos do Javascript


## Tipos 

* Value Types (Primitives) ou Tipos por Valor (Primitivos): Number, String, Boolean, Symbol, undefined, null;
* Reference Types ou Tipos por Referência: Object, Function, Array;

    // variáveis independentes (value type)
    let x = 10;
    let y = x;
    x = 20;
    console.log(x, y);

    // referência ou apontamento de memória
    let x = { value: 10 };
    let y = x;
    x.value = 20;
    console.log(x, y);




# Programação Orientada a Objetos 

A programação orientada a objetos é um conceito ou abordagem de desenvolvimento de software, uma maneira de produzir software que cria objetos com características e comportamentos que simulam entidades e elementos do mundo real. 


## Princípios

* Alta coesão para criação de objetos e baixo acoplamento reduzindo ou eliminando dependências entre objetos;
* Interface de uso simples e detalhes de implementação ocultos e alterações transparentes;
* Programe para interfaces e não para implementações;
* Composição de objetos preferencialmente em relação a herança de classes;
* ...


## Benefícios

A Programação Orientada à Objetos possibilita organizar sua solução em entidades com comportamentos e características próprias que se relacionam e interagem de maneira equivalente ao seu comportamento no mundo real.

As entidades do seu sistema representam e abstraem os diferentes perfis e papéis, assim como sua interação. Esta é uma abordagem recomendada para diversos tipos de sistemas incluindo aplicações de linha de negócios, jogos, e aplicativos.

Esta abordagem soluciona a interdependência entre funções que produzia códigos denominados frequentemente de "espagueti" que se tornavam rapidamente complexos e ineficientes quando a aplicação demandava novas funcionalidades.

...


## Conceitos

* Encapsulation ou encapsulamento
* Abstraction ou abstração
* Inheritance ou herança
* Polymorphism ou polimorfismo


## Objetos

* Creating Objects ou Criando Objetos
* Factories e Constructors ou Fábricas e Construtores
* Primitives and Reference Types ou Primitivas e Tipos por Referência
* Woking with Properties ou Trabalhando com Propriedades
* Private Properties ou Propriedades Privadas
* Getters / Setters

Objetos podem ser criados com Literais, Factories e Constructors.


### Objetos Literais

Objetos Literais podem conter propriedades e métodos (funções) mas caso seja necessário haver outros objetos do mesmo tipo em uma aplicação seria necessário criar múltiplas cópias do mesmo e isto causaria retrabalho no caso de alterações além de aumentar a chance de bugs para o método draw do exemplo. Por esta razão, este tipo de objeto é frequentemente utilizado apenas para passar valores em propriedades.

    const circle = {
        radius: 1,
        location: {
            x: 1,
            y: 1
        },
        draw: function {
            console.log('draw!');
        }
    };
    circle.draw();

### Objetos criados com Factories ou Constructors

    // Factory Function
    function createCircle(radius) {
        return {
            radius: 1,
            draw: function() {
                console.log('draw');
            }
        }
    }
    const circulo1 = createCircle(1);

    // Constructor Function
    function Circle(radius) {
        // uso de this para referenciar o objeto
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
    const circulo2 = new Circle(1); 

Atividades:

* Utilize o console para verificar os objetos circulo1 e circulo2
* Utilize o console para verificar a propriedade constructor dos dois objetos

Os literais são utilizados para simplificar a criação de tipos comuns da linguagem. Por exemplo:

    var x = {};

O literal {} acima equivale ao construtor ilustrado abaixo:

    var x = new Object();

Da mesma forma, '', "", e ´´ são literais para o tipo String, true e false são literais para o tipo Boolean, os números inteiros 1, 2, 3, etc., são literia para o tipo Number.


### Propriedades

JavaScript é uma linguagem dinâmica ou seja, não tipada, e como consequência, propriedades podem ser criadas ou removidas em tempo de execução. 

    function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
            console.log('draw');
        }
    }
    const circulo1 = new Circle(10);

    // definição de propriedade utilizando sintaxe Dot Notation 
    circulo1.location = { x: 1 }; 
    console.log(circulo1);

    // definição de propriedade utilizando sintaxe Bracket Notation
    circulo1['location'] = { x: 1 };

A sintade Bracket Notation é útil para nomes de propriedades que utilizem caracteres especiais, espaços, utilizem sequências numeradas, entre outros.

Utilize o comando delete para remover propriedades de um objeto em tempo de execução. 

    delete circulo1.location;

Utilize for in para iterar nas propriedades de um objeto.

    for (let key in circulo1) {
        console.log(key, ccirculo[key]);
    }

Utilize typeof para verificar o tipo da propriedade.

    for (let key in circulo1) {
        if (typeof(circulo[key]) !== 'function')
        console.log(key, ccirculo[key]);
    }

Utilize Object.keys para obter a lista de propriedades de um objeto. Esta abordagem não permite diferenciar entre propriedades e métodos.

    const propriedades = Object.keys(circulo1);
    console.log(keys);

Utilize o operador in para verificar se uma propriedade existe no objeto.

    if ('radius' in circulo1)
        console.log('existe!');

Utilize o princípio da Abstração (Abstraction) para ocultar os detalhes da implementação e disponibilizar apenas o principal.






..

Agrupe variáveis e funções relacionadas em unidades denominadas objetos. Variáveis também são chamdas de propriedades e funções podem ser referenciados como métodos. A construção de uma unidade com características e comportamentos relacionados é denominado Encapsulamento.

Demonstração:

O código abaixo utiliza uma abordagem estruturada (não orientada à objetos) onde temos a declaração de algumas variáveis e uma função sem qualquer vínculo de relacionamento entre estes elementos.

    let variacaoVelocidade = 10;
    let variacaoTempo = 2;

    function calcularAceleracao(variacaoVelocidade, variacaoTempo) {
        return variacaoVelocidade / variacaoTempo;
    }

Ao implementar o código acima utilizando a abordagem orientada à objetos, definimos um objeto denominado MovimentoUniformementeVariado que encapsula as mesmas propriedades e método ilustrados acima em uma unidade denominado objeto.

    let MovimentoUniformementeVariado = {
        variacaoVelocidade: 10;
        variacaoTempo: 2;
        calcularAceleracao: function() {
            return variacaoVelocidade / variacaoTempo;
        }
    }
    MovimentoUniformementeVariado.calcularAceleracao();


## Prototype



## Prototypical Inheritance



## ECMAScript 6 / 2015


* Classe

class Circulo { 

}


## Módulos

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





