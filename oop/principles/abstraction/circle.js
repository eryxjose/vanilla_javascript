
// Ao esconder a propriedade indice e o método multiplicarIndiceRadius, 
// estamos fazendo uso do princípio da Abstração.

function Circle(radius) {
    var indice = 1.1;
    var multiplicarIndiceRadius = function() {
        return radius * indice;
    };
    this.radius = radius;
    this.draw = function() {
        console.log(multiplicarIndiceRadius());
    }
}
const circulo2 = new Circle(2); 
circulo2.draw();

