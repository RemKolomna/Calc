var CalcNamespace;
(function (CalcNamespace) {
    var Calc = (function () {
        function Calc(x, y) {
            this.x = +x.value;
            this.y = +y.value;
        }
        Calc.prototype.Sum = function () {
            return "" + (this.x + this.y);
        };
        Calc.prototype.Mul = function () {
            return "" + (this.x * this.y);
        };
        Calc.prototype.Diff = function () {
            return "" + (this.x - this.y);
        };
        Calc.prototype.Div = function () {
            return "" + (this.x / this.y);
        };
        return Calc;
    })();
    CalcNamespace.Calc = Calc;
})(CalcNamespace || (CalcNamespace = {}));
//# sourceMappingURL=file1.js.map