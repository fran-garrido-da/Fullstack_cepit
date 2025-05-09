var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }
    Rectangulo.prototype.calcular_area = function () {
        return this.ancho * this.altura;
    };
    Rectangulo.prototype.calcular_perimetro = function () {
        return 2 * (this.altura + this.ancho);
    };
    return Rectangulo;
}());
var rectanguloTest = new Rectangulo(5, 10);
console.log(rectanguloTest.calcular_area());
console.log(rectanguloTest.calcular_perimetro());
