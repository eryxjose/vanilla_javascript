

// Implementação mínima de BasicServer
function BasicServer() {
    this.pid = 1;
    console.log("Iniciando Basic Server...");
    this.decorators_list = [];
}


// Objeto para definição dos decorators
BasicServer.decorators = {};


// Criar decorators

BasicServer.decorators.reverseProxy = {
    init: function (pid) {
        console.log("Iniciado Proxy Reverso.");
        return pid + 1;
    }
};

BasicServer.decorators.servePHP = {
    init: function (pid) {
        console.log("Iniciado Servidor PHP.");
        return pid + 1;
    }
};

BasicServer.decorators.serveNode = {
    init: function (pid) {
        console.log("Iniciado Servidor Node.");
        return pid + 1;
    }
};

// Adicionar decorator a lista de decorators
BasicServer.prototype.decorate = function (decorator) {
    this.decorators_list.push(decorator);
};

BasicServer.prototype.init = function () {
    var running_processes = 0;
    var pid = this.pid;
    for (i = 0; i < this.decorators_list.length; i++) {
        decorator_name = this.decorators_list[i];
        running_processes = BasicServer.decorators[decorator_name].init(pid);
    }
    return running_processes;
};

// Instanciando um servidor PHP
var phpServer = new BasicServer();
phpServer.decorate('reverseProxy');
phpServer.decorate('servePHP');
total_processes = phpServer.init();
console.log(total_processes);

// Instanciando um servidor Node
var nodeServer = new BasicServer();
nodeServer.decorate('serveNode');
nodeServer.init();
total_processes = nodeServer.init();
console.log(total_processes);
