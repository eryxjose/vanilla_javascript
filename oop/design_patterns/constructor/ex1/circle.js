
// Criando um objeto utilizando Constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    };
}
const circulo1 = new Circle(1);
