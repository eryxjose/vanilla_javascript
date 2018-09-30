
var _ = require('underscore');

var logger = (function() {
    var CustomLogger = {
        log: function(message) {
            console.log(message);
        }
    };
    return CustomLogger;
}());

var Server = (function(Logger) {
    var CustomServer = function() {
        this.init = function() {
            this.log("Inicializando o servidor...");
        };
    };
    _.extend(CustomServer.prototype, Logger);
    return CustomServer;

}(logger));

(new Server()).init();
