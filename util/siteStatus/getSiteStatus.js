var request = require('request');
var status = undefined;
function getSiteStatus(callback,intervalo) {
    var interval = setInterval(function() {
        if (intervalo == 0) {
            runGetSiteStatus(callback);
            clearInterval(interval);
        } else {
            runGetSiteStatus(callback);
        }
    }, 2000);
}
function runGetSiteStatus(callback) {
    request('http://eryxguimaraes.com.br', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                status_code = response.statusCode;
                dataHora = new Date();
            }
            callback(status_code,dataHora);
        });
}
function showStatusCode(status, dataHora) {
    console.log("Status " + status + " disparado em " + dataHora);
}

getSiteStatus(showStatusCode,3);
