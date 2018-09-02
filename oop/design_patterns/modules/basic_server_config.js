
// Módulos são criados com a definição de uma expressão IIFE.

var basicServerConfig = (function () {  
    var environment= "production";  
    startupParams= {    
        cacheTimeout: 30,    
        locale: "pt_BR"  
    };  
    return {    
        init: function () {      
            console.log( "Iniciando servidor..." );    
        },    
        updateStartup: function( params ) {      
            this.startupParams = params;      
            console.log( this.startupParams.cacheTimeout );      
            console.log( this.startupParams.locale );    
        }  
    }; 
})(); 

basicServerConfig.init(); 

// Atualizando informações de configuração com um objeto literal
basicServerConfig.updateStartup({
    cacheTimeout:60,    
    locale:"pt_BR"
}); 

//60, pt-br 