/// <reference path="file1.ts" />

function main(oper: string): void {
    var CalcObj = new CalcNamespace.Calc(document.getElementById("x"), document.getElementById("y"));
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
