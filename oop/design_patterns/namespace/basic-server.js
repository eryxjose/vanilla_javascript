
// A utilização do padrão namespace associado ao
// padrão module não é obrigatório mas é recomendada.

var SERVER = SERVER || {};
SERVER.basicServerConfigRMP = (function () {  
    
    var environment = "production";  
    
    startupParams = {    
        cacheTimeout: 30,    
        locale: "en"  
    };
    
    return {    
        init: getStartupParams,    
        updateStartup: updateStartup
    };

    /////// Implementação
  
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

// Consumindo o objeto basicServerConfigRMP
basicServerConfigRMP.init(); 
basicServerConfigRMP.updateStartup({
    cacheTimeout:60,    
    locale:"pt-br"
}); 

// Resultado: 60, pt-br 