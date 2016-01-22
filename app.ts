<<<<<<< HEAD
=======
﻿//test 2
﻿
>>>>>>> 193d008a81c20cd3232d994dd7a18a1b9a4a402e
﻿function Sum(): void {
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


