# Design Patterns JavaScript

* Namespace 

Crie um único objeto global para centralizar as funcionalidades de sua aplicação, reduzir o risco para ocorrência de conflitos de nomeclatura e manter o escopo global limpo.

Veja um exemplo:

// Objeto Global Único
var TASKFACTORY = TASKFACTORY || {};
TASKFACTORY.Task = function() {};
TASKFACTORY.DevTask = function() {};
TASKFACTORY.DesignTask = function() {};
TASKFACTORY.DocumentingTask = function() {};
TASKFACTORY.DetaisTask = {
    dataCadastro: '',
    Titulo: '',
    Descricao: ''
};


