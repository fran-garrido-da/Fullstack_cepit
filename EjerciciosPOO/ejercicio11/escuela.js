"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alumno_js_1 = require("./alumno.js");
var profesor_js_1 = require("./profesor.js");
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.alumnos = [];
        this.profesores = [];
    }
    Escuela.prototype.matricular = function (name, nota) {
        this.alumnos.push(new alumno_js_1.Alumno(name, nota));
    };
    Escuela.prototype.contratar = function (name) {
        this.profesores.push(new profesor_js_1.Professor(name));
    };
    Escuela.prototype.expulsar = function (name) {
        var searchindex = this.alumnos.findIndex(function (item) { return item.name === name; });
        this.alumnos.splice(searchindex, 1);
    };
    Escuela.prototype.despedir = function (name) {
        var searchindex = this.profesores.findIndex(function (item) { return item.name === name; });
        this.profesores.splice(searchindex, 1);
    };
    return Escuela;
}());
var primaria = new Escuela();
primaria.matricular("Sebastian", 10);
primaria.matricular("Matias", 7);
primaria.matricular("Belen", 6);
primaria.matricular("Santiago", 1);
primaria.contratar("Mario");
primaria.contratar("Sandra");
primaria.contratar("Marcos");
primaria.contratar("Corina");
console.log(primaria.alumnos);
console.log(primaria.profesores);
primaria.alumnos.forEach(function (alum) {
    primaria.profesores.forEach(function (prof) { return prof.listarAlumno(alum); });
});
primaria.profesores.forEach(function (prof) {
    console.log("\nProfesor: ".concat(prof.name));
    console.log("Alumnos: ");
    prof.listado.forEach(function (alum) { return console.log("".concat(alum.name)); });
});
