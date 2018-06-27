"option strict"

$().ready(function() {
    $("thead").addclass("thead-dark");
});

function loaded() {
    $.getJSON("http://localhost:57783/students/list")
        .done(function(resp){
            console.log(resp);
            display(resp);
        })
}

function display(students) {
    var tbody = $("#tbody")
    tbody.html = "";
    for(var student of students) {
        var tr = $("<tr></tr>");
        tr.append("<td>"+student.Id+"</td>");
        tr.append("<td>"+student.Major.Description+"</td>");
        tr.append("<td>"+student.Name+"</td>");
        tr.append("<td>"+student.Sat+"</td>");
        tbody.append(tr);
    }
}