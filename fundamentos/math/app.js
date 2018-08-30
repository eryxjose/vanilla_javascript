
// Literal Function
function factoL (n) {
    if (n <= 1) 
        return 1;
    return n * factoL(n-1);
}
console.log(factoL(4)); 

// Named Function 
var factoN = function factorial(n) {
    if (n <= 1) 
        return 1;
    return n * factorial(n-1);
};
console.log(factoN(5));

// No exemplo abaixo div1 está sendo armazenado no escopo global. 
// Esta prática não é recomendada porque possibilita a ocorrência de
// conflitos e problemas difíceis de tratar.
var div1 = document.createElement("div");
div1.textContent = factoN(3);
document.body.appendChild(div1);

// self-invoked function
(function addDiv2(){
    var div2 = document.createElement("div");
    div2.textContent = factoL(6);
    document.body.appendChild(div2);
})();

console.log(div1); // Não dispara erro porque está disponível globalmente
console.log(div2); // Dispara erro de referência não encontrada