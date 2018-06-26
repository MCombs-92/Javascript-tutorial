"option explicit"
var users = [
    { id:1, username:"sa", password:"sa", lastname:"admin", isAdmin:true, active: true },
    { id:2, username:"aa", password:"aa", lastname:"Amos", isAdmin:false, active: true },
    { id:3, username:"bb", password:"bb", lastname:"Badin", isAdmin:true, active: false },
    { id:4, username:"cc", password:"cc", lastname:"Cory", isAdmin:false, active: false },
    { id:5, username:"dd", password:"dd", lastname:"Dugan", isAdmin:true, active: true }
];

function loaded() {
    var tbody = document.getElementById("tbody");
    for(var idx = 0; idx < users.length; idx++) {
        var user = users[idx];
        var row = "";
        row += "<tr>";
        row += "<td>" + user.id + "</td>";
        row += "<td>" + user.username + "</td>";
        row += "<td>" + user.password + "</td>";
        row += "<td>" + user.lastname + "</td>";
        row += "<td>" + ((user.isAdmin) ? 'Y' : 'N') + "</td>";
        row += "<td>" + user.active + "</td>";
        row += "</tr>";
        tbody.innerHTML += row;
    }
}