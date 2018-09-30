
// Car Factory Constructor

function CarFactory() {}

// info estará disponível para instâncias do objeto
CarFactory.prototype.info = function() {
    console.log("Criando carro com "+this.doors+
    " portas e motor capacidade " + this.engine_capacity + "");
};

CarFactory.make = make; // substituindo função anônima pela função make

CarFactory.Compact = function () {
    this.doors = 4;
    this.engine_capacity = 2;
};
CarFactory.Sedan = function() {
    this.doors = 2;
    this.engine_capacity = 2;
};
CarFactory.SUV = function() {
    this.doors = 4;
    this.engine_capacity = 6;
};

//// Implementações
function make (type) {
    var constr = type;
    var car;
    CarFactory[constr].prototype = new CarFactory();
    car = new CarFactory[constr]();
    return car;
}

//// Testes
var golf = CarFactory.make('Compact');
var vento = CarFactory.make('Sedan');
var touareg = CarFactory.make('SUV');

golf.info();


