
function buildTable() {
    addLineToHTMLTable("Linha 1 Coluna 1", "Linha 1 Coluna 2");
    addLineToHTMLTable("Linha 2 Coluna 1", "Linha 2 Coluna 2");
    addLineToHTMLTable("Linha 3 Coluna 1", "Linha 3 Coluna 2");
}

function addLineToHTMLTable(firstName, lastName) {
    var tableBody = document.querySelector("#tableContactBody");
    var newRow   = tableBody.insertRow();
    var firstNameCell  = newRow.insertCell();
    firstNameCell.innerHTML = firstName;
    var lastNameCell   = newRow.insertCell();
    lastNameCell.innerHTML = lastName;
}