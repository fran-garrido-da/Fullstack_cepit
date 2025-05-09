"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Libro = void 0;
var rls = require("readline-sync");
var Libro = /** @class */ (function () {
    function Libro() {
        this.autor = 'Sin autor';
        this.isbn = 0;
        this.paginas = 0;
        this.titulo = 'Sin titulo';
        this.setLogicStateFalse();
    }
    Libro.prototype.getIsbn = function () {
        return this.isbn;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getAño = function () {
        return this.año;
    };
    Libro.prototype.getPaginas = function () {
        return this.paginas;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function () {
        this.titulo = rls.question("Ingrese titulo: ");
    };
    Libro.prototype.setAutor = function () {
        this.autor = rls.question("Ingrese autor: ");
    };
    Libro.prototype.setAño = function () {
        this.año = rls.questionInt("Ingrese a\u00F1o de edicion: ");
    };
    Libro.prototype.setPaginas = function () {
        while (this.paginas <= 0) {
            this.paginas = rls.questionInt("Ingrese numero de paginas: ");
        }
    };
    Libro.prototype.cargarLibro = function () {
        this.isbn = rls.questionInt("Ingrese Numero ISBM: ");
        this.setTitulo();
        this.setAutor();
        this.setAño();
        this.setPaginas();
        this.setLogicStateTrue();
    };
    ;
    Libro.prototype.mostrarLibro = function () {
        if (this.isbn !== 0) {
            console.log("ISBM: ".concat(this.isbn, "\n                \nTitulo: ").concat(this.titulo, "\n                \nAutor: ").concat(this.autor, "\n                \nA\u00F1o: ").concat(this.año, "\n                \nNumero de paginas: ").concat(this.paginas));
        }
    };
    Libro.prototype.setLogicStateTrue = function () {
        this.logicState = true;
    };
    Libro.prototype.setLogicStateFalse = function () {
        this.logicState = false;
    };
    return Libro;
}());
exports.Libro = Libro;
// const firstBook = new Libro();
// const secondBook = new Libro();
// const thirdBook = new Libro();
// firstBook.cargarLibro();
// firstBook.mostrarLibro();
// secondBook.cargarLibro();
// secondBook.mostrarLibro();
// thirdBook.cargarLibro();
// thirdBook.mostrarLibro();
