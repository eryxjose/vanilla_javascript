
// A utilização do padrão namespace associado ao
// padrão module não é obrigatório mas é recomendada.

var SERVER = SERVER || {};
SERVER.basicServerConfigRMP = (function () {  
    
    var environment = "production";  
    
    startupParams = {    
        cacheTimeout: 30,    
        locale: "pt_BR"  
    };
    
    return {    
        init: getStartupParams,    
        updateStartup: updateStartup
    };

    ///////
  
    function getStartupParams() {
        console.log( "Iniciando servidor..." );
        return startupParams;
    }
    function updateStartup( params ) {      
        this.startupParams = params;      
        console.log( this.startupParams.cacheTimeout );      
        console.log( this.startupParams.locale );    
    }  
     
})(); 
basicServerConfigRMP.init(); 
//"Initializing the server" 
basicServerConfigRMP.updateStartup({
    cacheTimeout:60,    
    locale:"en_US"
}); 
//60, pt-br 