function Sum() {
    var x = +document.getElementById("x").value;
    var y = +document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+a.value) + y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+a.value) + x);
    else
        a.value = "" + (x + y);
}
function Mul() {
    var x = +document.getElementById("x").value;
    var y = +document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+a.value) * y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+a.value) * x);
    else
        a.value = "" + (x * y);
}
function Diff() {
    var x = +document.getElementById("x").value;
    var y = +document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+a.value) - y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+a.value) - x);
    else
        a.value = "" + (x - y);
}
function Div() {
    var x = +document.getElementById("x").value;
    var y = +document.getElementById("y").value;
    var a = document.getElementById("answer");
    if (document.getElementById("x").value == "")
        a.value = "" + ((+a.value) / y);
    else if (document.getElementById("y").value == "")
        a.value = "" + ((+a.value) / x);
    else
        a.value = "" + (x / y);
}
//# sourceMappingURL=app.js.map