"option strict"

function get () {
    var id = document.getElementById("iId").value;
    $.getJSON("http://localhost:58705/customers/get/"+id)
        .done(function(resp){
            console.log(resp);
            load(resp);
        })
}

function load(customer) {
    document.getElementById("pId").value = customer.Id;
    document.getElementById("pName").value = customer.Name;
    document.getElementById("pCity").value = customer.City;
    document.getElementById("pState").value = customer.State;
    document.getElementById("pPref").checked = customer.Preferred;

}

function change() {
    var customer = {
        Id: document.getElementById("pId").value,
        Name: document.getElementById("pName").value,
        City: document.getElementById("pCity").value,
        State: document.getElementById("pState").value,
        Preferred: document.getElementById("pPref").checked
    };

    $.post("http://localhost:58705/customers/change", customer)
        .done(function(resp){
            console.log(resp);
        })
}