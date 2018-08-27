// Abordagem tradicional estruturada ou procedural

let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}


getWage(baseSalary, overtime, rate);

// Abordagem orientação à objetos 

// Criando um objeto utilizando literal
let funcionario = {
    baseSalary: 30000,
    oevrtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
}

funcionario.getWage();

// Criando um objeto utilizando Factory
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

// Criando um objeto utilizando Constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const outroCirculo = new Circle(1);
