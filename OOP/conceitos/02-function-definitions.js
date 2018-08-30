/* Declaração de Funções */


// Sintaxe declarativa
function adicionar(a, b) {
    return a + b;
}

var x = adicionar(1, 2);


// Sintaxe utilizando expressão
var adicionar = function(a, b) {
    return a + b;
};


// Sintaxe Arrow Function disponibilizada com ECMAScript2015
// Ex. 1 - função adicionar utilizando Arrow Function
var adicionar = (a, b) => a + b;
// Ex. 2 - Arrow Function são utilizadas em expressões
const numbers = [1, 2, 3];
const doubled = numbers.map(n => 2 * n);


// Sintaxe para funções assíncronas (async e await)
function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  };
    
// var add = async function(x) { // async function expression assigned to a variable
//     var a = await resolveAfter2Seconds(20);
//     var b = await resolveAfter2Seconds(30);
//     return x + a + b;
// };

add(10).then(v => {
    console.log(v);  // exibe 60 depois de 4 segundos.
});

// (async function(x) { // async function expression used as an IIFE
//     var p_a = resolveAfter2Seconds(20);
//     var p_b = resolveAfter2Seconds(30);
//     return x + await p_a + await p_b;
// })(10).then(v => {
//     console.log(v);  // prints 60 after 2 seconds.
// });


// Exemplos declaração de objetos

var obj1 = function() {
    id = 1;
    titulo = '';
};

var obj2 = {
    id: 1,
    titulo: ''
};

function obj3 (w,h) {
    this.width = w;
    this.height = h;
    this.get = function() {
        return "Altura: " + this.height + "; Largura: " + this.width;
    };
    
}

//div.textContent = "Elaine";
