

var modulo1 = (function() {

    var secret = 'supersecretkey';
    var passcode = 'nuke';

    function getSecret() {
        console.log(secret);
    }

    function getPassCode() {
        console.log(passcode);
    }

    return {
        getSecret: getSecret,
        getPassCode: getPassCode
    }

})();

modulo1.getSecret();
modulo1.getPassCode();