function get() {
    var id = document.getElementById("iId").value;
    $.getJSON("http://localhost:57783/majors/get/" + id)
        .done(function(resp) {
            console.log(resp);
            display(resp);
        }
    );
}

function display(major) {
    document.getElementById("pId").textContent = major.Id;
    document.getElementById("pDesc").textContent = major.Description;
    document.getElementById("pMinSat").textContent = major.MinSat;
}