"option strict"

var theNumber = 0;
var inputCtrl = null;

function display() {
    // store the new number value
    inputCtrl.value = theNumber;
    // figure out whether odd or even
    // Pro tip: isEven = theNumber % 2 == 0;
    var isEven;
    if(theNumber % 2 == 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    // set the color to red if even else black
    // Pro tip: inputCtrl.style.color = (isEven) ? "red" : "black";
    if(isEven) {
        inputCtrl.style.color = "red";
    } else {
        inputCtrl.style.color = "black";
    }
    // --------------------------------------
    var isDivisibleBy3 = theNumber % 3 == 0;
    inputCtrl.style.fontWeight = (isDivisibleBy3) ? "bold" : "normal";
    // --------------------------------------
    var isDivisibleBy7 = theNumber % 7 == 0;
    inputCtrl.style.fontStyle = (isDivisibleBy7) ? "italic" : "normal";

}

function loaded() {
    inputCtrl = document.getElementById("value");
    inputCtrl.value = theNumber;
}

function add() {
    theNumber++;
    display();
}

function sub() {
    theNumber--;
    display();
}