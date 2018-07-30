
// Exemplos de declaração de variáveis 
let div1 = document.createElement("div");
var div2 = "aaa";

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
