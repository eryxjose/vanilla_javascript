
// Factory Pattern
/*
    Este padrão define uma interface para o objeto, e possibilita:

*/ 

function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}
