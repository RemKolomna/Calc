function Sum(): void {
    var x = + document.getElementById("x").value;
    var y = + document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+ a.value) + y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+ a.value) + x);
    else
        a.value = "" + (x + y);
}

function Mul(): void {
    var x = + document.getElementById("x").value;
    var y = + document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+ a.value) * y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+ a.value) * x);
    else
        a.value = "" + (x * y);
}

function Diff(): void {
    var x = + document.getElementById("x").value;
    var y = + document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+ a.value) - y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+ a.value) - x);
    else
        a.value = "" + (x - y);
}

function Div(): void {
    var x = + document.getElementById("x").value;
    var y = + document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+ a.value) / y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+ a.value) / x);
    else
        a.value = "" + (x / y);
}  


