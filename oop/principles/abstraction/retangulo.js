
// Este código ilustra o uso de prototype para estender 
// propriedades e métodos de um objeto

function Retangulo(largura, altura) {
    this.width = largura;
    this.height = altura;
}
Retangulo.prototype.area = function() {
    return this.width * this.height;
};
Retangulo.prototype.perimetro = function() {
    return (2 * this.width) + (2 * this.height);
};

// Propriedades de Classe

Retangulo.EMPTY = new Retangulo(0, 0);

Retangulo.Max = function (a, b) {
    if (a.area() == b.area()) return null;
    else if (a.area() > b.area()) return a;
    else return b;
};

// Testes

var r1 = new Retangulo(5,4);
var r2 = new Retangulo(8,5);
var r3 = new Retangulo(2,6);
var r4 = new Retangulo(5,4);
console.log(r1);
console.log('Área: ' + r1.area());
console.log('Perímetro: ' + r1.perimetro());
console.log('Comparando r1 e r4: ' + r1.Max())

