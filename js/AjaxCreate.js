"option strict"

function create() {
    var customer = {
        Id: 0,
        Name: document.getElementById("pName").value,
        City: document.getElementById("pCity").value,
        State: document.getElementById("pState").value,
        Preferred: document.getElementById("pPreferred").checked



    };

    $.post("http://localhost:58705/customers/create", customer)
        .done(function(resp){
            console.log(resp);
        }
    );
}
