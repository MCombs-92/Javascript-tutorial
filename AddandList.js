"option strict"

var students = [
    { id: 0, name: "TEST", sat: 1000, gpa: 4, year: "FR"}
];

function loaded() {
    display();
}

function add() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
}

function display() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(var student of students) {
        var row = "";
        row += "<tr>";
        row += "<td>" + student.id + "</td>";
        row += "<td>" + student.name + "</td>";
        row += "<td>" + student.sat + "</td>";
        row += "<td>" + student.gpa + "</td>";
        row += "<td>" + student.year + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
}