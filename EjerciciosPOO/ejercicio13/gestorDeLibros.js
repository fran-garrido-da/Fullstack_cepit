"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libro_js_1 = require("../ejercicio5/libro.js");
var GestorDeLibros = /** @class */ (function () {
    function GestorDeLibros() {
        this.colection = [];
    }
    //VERIFICADOR
    GestorDeLibros.prototype.verif = function (isbn) {
        var verif = this.colection.find(function (item) { return item.getIsbn() === isbn; }) === undefined;
        return verif;
    };
    GestorDeLibros.prototype.searchIsbn = function (isbn) {
        if (!this.verif(isbn)) {
            return this.colection.filter(function (item) { return item.getIsbn() === isbn; })[0];
        }
    };
    GestorDeLibros.prototype.insertarLibro = function () {
        var newLibro = new libro_js_1.Libro();
        newLibro.cargarLibro();
        if (this.verif(newLibro.getIsbn())) {
            this.colection.push(newLibro);
            console.log("Nuevo libro agregado, numero ISBN: ".concat(newLibro.getIsbn()));
        }
        else {
            console.log("El libro de numero ISBN ".concat(newLibro.getIsbn(), " ya se encuentra en registro"));
        }
    };
    GestorDeLibros.prototype.consultarLibro = function (isbn) {
        if (!this.verif(isbn)) {
            var libroConsultado = this.searchIsbn(isbn);
            libroConsultado === null || libroConsultado === void 0 ? void 0 : libroConsultado.mostrarLibro();
        }
        else {
            console.log("El libro de numero ISBN ".concat(isbn, " no se encuentra en registro"));
        }
    };
    GestorDeLibros.prototype.modificarLibro = function (isbn) {
        if (this.verif(isbn)) {
            var libroModificado = this.searchIsbn(isbn);
            libroModificado === null || libroModificado === void 0 ? void 0 : libroModificado.setTitulo();
            libroModificado === null || libroModificado === void 0 ? void 0 : libroModificado.setAutor();
            libroModificado === null || libroModificado === void 0 ? void 0 : libroModificado.setAño();
            libroModificado === null || libroModificado === void 0 ? void 0 : libroModificado.setPaginas();
        }
        else {
            console.log("El libro de numero ISBN ".concat(isbn, " no se encuentra en registro"));
        }
    };
    GestorDeLibros.prototype.logicDeleteLibro = function (isbn) {
        var _a;
        if (!this.verif(isbn)) {
            (_a = this.searchIsbn(isbn)) === null || _a === void 0 ? void 0 : _a.setLogicStateFalse();
        }
        else {
            console.log("El libro de numero ISBN ".concat(isbn, " no se encuentra en registro"));
        }
    };
    GestorDeLibros.prototype.logicRestoreLibro = function (isbn) {
        var _a;
        if (!this.verif(isbn)) {
            (_a = this.searchIsbn(isbn)) === null || _a === void 0 ? void 0 : _a.setLogicStateTrue();
        }
        else {
            console.log("El libro de numero ISBN ".concat(isbn, " no se encuentra en registro"));
        }
    };
    GestorDeLibros.prototype.mostrarColection = function () {
        this.colection.forEach(function (item) { return item.mostrarLibro(); });
    };
    return GestorDeLibros;
}());
var libreria = new GestorDeLibros();
// Test insertar| 
libreria.insertarLibro();
libreria.insertarLibro();
libreria.insertarLibro();
libreria.mostrarColection();
// Test consulta
libreria.consultarLibro(123);
libreria.consultarLibro(321);
libreria.consultarLibro(124);
// Test modificar
libreria.modificarLibro(123);
libreria.modificarLibro(321);
libreria.modificarLibro(124);
libreria.mostrarColection();
// Test eliminar
libreria.logicDeleteLibro(123);
libreria.logicDeleteLibro(321);
libreria.logicDeleteLibro(124);
libreria.mostrarColection();
// Test restore
libreria.logicRestoreLibro(123);
libreria.logicRestoreLibro(321);
libreria.logicRestoreLibro(124);
libreria.mostrarColection();
