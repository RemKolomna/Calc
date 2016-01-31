var file1_1 = require('./file1');
function main(oper) {
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var CalcObj = new file1_1.Calc(x, y);
    var answer = document.getElementById("answer");
    switch (oper) {
        case "sum":
            answer.value = CalcObj.Sum();
            break;
        case "mul":
            answer.value = CalcObj.Mul();
            break;
        case "diff":
            answer.value = CalcObj.Diff();
            break;
        case "div":
            answer.value = CalcObj.Div();
            break;
        default:
            alert("something is wrong");
    }
}
//# sourceMappingURL=app.js.map