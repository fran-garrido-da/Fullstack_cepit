var Calculadora = /** @class */ (function () {
    function Calculadora(a, b) {
        this.numA = a;
        this.numB = b;
    }
    Calculadora.prototype.suma = function () {
        return this.numA + this.numB;
    };
    Calculadora.prototype.resta = function () {
        return this.numA - this.numB;
    };
    Calculadora.prototype.multi = function () {
        if (this.numA === 0 || this.numB === 0) {
            return 0;
        }
        else
            return this.numA * this.numB;
    };
    Calculadora.prototype.div = function () {
        if (this.numB === 0) {
            return "Ingrese numero válido";
        }
        else
            return (this.numA / this.numB).toFixed(2);
    };
    Calculadora.prototype.numASet = function (a) {
        this.numA = a;
    };
    Calculadora.prototype.numBSet = function (b) {
        this.numB = b;
    };
    Calculadora.prototype.mostrar = function (resultado) {
        console.log(resultado);
    };
    return Calculadora;
}());
var calc = new Calculadora(3, 8);
calc.mostrar("Suma: ".concat(calc.suma()));
calc.mostrar("Resta: ".concat(calc.resta()));
calc.mostrar("Multiplicacion:".concat(calc.multi()));
calc.mostrar("Division:".concat(calc.div()));
console.log("\n");
var calc2 = new Calculadora(-4, -5);
calc2.mostrar("Suma: ".concat(calc2.suma()));
calc2.mostrar("Resta: ".concat(calc2.resta()));
calc2.mostrar("Multiplicacion:".concat(calc2.multi()));
calc2.mostrar("Division:".concat(calc2.div()));
console.log("\n");
var calc3 = new Calculadora(2, -2);
calc3.mostrar("Suma: ".concat(calc3.suma()));
calc3.mostrar("Resta: ".concat(calc3.resta()));
calc3.mostrar("Multiplicacion:".concat(calc3.multi()));
calc3.mostrar("Division:".concat(calc3.div()));
console.log("\n");
var calc4 = new Calculadora(-1, 14);
calc4.mostrar("Suma: ".concat(calc4.suma()));
calc4.mostrar("Resta: ".concat(calc4.resta()));
calc4.mostrar("Multiplicacion:".concat(calc4.multi()));
calc4.mostrar("Division:".concat(calc4.div()));
console.log("\n");
var calc5 = new Calculadora(0, 5);
calc5.mostrar("Suma: ".concat(calc5.suma()));
calc5.mostrar("Resta: ".concat(calc5.resta()));
calc5.mostrar("Multiplicacion:".concat(calc5.multi()));
calc5.mostrar("Division:".concat(calc5.div()));
console.log("\n");
var calc6 = new Calculadora(7, 0);
calc6.mostrar("Suma: ".concat(calc6.suma()));
calc6.mostrar("Resta: ".concat(calc6.resta()));
calc6.mostrar("Multiplicacion:".concat(calc6.multi()));
calc6.mostrar("Division:".concat(calc6.div()));
