"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
var Professor = /** @class */ (function () {
    function Professor(name) {
        this.name = name;
        this.listado = [];
    }
    Professor.prototype.listarAlumno = function (alumno) {
        this.listado.push(alumno);
    };
    return Professor;
}());
exports.Professor = Professor;
