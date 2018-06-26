var techs = [
    
]

function loaded() {
display();
}

function display() {
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for( var tech of techs) {
        var row = "";
        row += "<tr>"
        row += "<td>" + tech.id + "</td>"
        row += "<td>" + tech.name + "</td>"
        row += "<td>" + tech.difficulty + "</td>"
        row += "</tr>"
        tbody.innerHTML += row
    }
}

function add() {
    var tech = {
        id: document.getElementById("pId").value,
        name: document.getElementById("pName").value,
        difficulty: document.getElementById("pDiff").value
    }
    techs.push(tech);
    display();
}

function find(value) {
    var tech = techs.findIndex(i => i.id == document.getElementById("pId").value);
    document.getElementById("pId").value = tech.id;
    document.getElementById("pName").value = tech.name;
    document.getElementById("pDiff").value = tech.difficulty;
    
}