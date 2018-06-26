"option strict"

function add() {
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var op1Value = op1Ctrl.value;
    var op2Value = op2Ctrl.value;
    var labelCtrl = document.getElementById("answer");
    labelCtrl.textContent = Number(op1Value) + Number(op2Value);
}

function sub() {
    var op1Ctrl = document.getElementById("op1");
    var op2Ctrl = document.getElementById("op2");
    var op1Value = op1Ctrl.value;
    var op2Value = op2Ctrl.value;
    var labelCtrl = document.getElementById("answer");
    labelCtrl.textContent = Number(op1Value) - Number(op2Value);
}

function clicked() {
    // gets access to the input box
    var inputCtrl = document.getElementById("thetext");
    // gets the value the user typed in
    var inputValue = inputCtrl.value;
    // gets access to the label
    var labelCtrl = document.getElementById("thelabel");
    // puts the value into the label
    labelCtrl.textContent = inputValue;
}