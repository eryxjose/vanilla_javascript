
var queryURL = "./log.json";
fetch(queryURL)
        .then(function (response) {
            // response.json() returns a json string,
            // returning it will convert it 
            // to a pure JavaScript 
            // object for the next then's callback
            return response.json();
        })
        .then(function (lista) {
            // users is a JavaScript object here
            //displayUsersAsATable(users);
            console.log(lista);
        })
        .catch(function (error) {
            console.log('Error during fetch: ' + error.message);
        });
