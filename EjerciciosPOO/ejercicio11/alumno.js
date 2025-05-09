"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(name, nota) {
        this.name = name;
        this.nota = nota;
    }
    Alumno.prototype.showAprobado = function () {
        if (this.nota < 7 && this.nota >= 1) {
            console.log("Estoy desaprobado");
        }
        else if (this.nota >= 7 && this.nota <= 10) {
            console.log("Estoy aprobado");
        }
        else {
            console.log("Error en la nota");
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
// const pablo = new Alumno("Pablo",6);
// const johanna = new Alumno("johanna",7);
// const maria = new Alumno("maria",1);
// const lean = new Alumno("lean",10);
// const glitch = new Alumno("glitch",-1);
// const bug = new Alumno("bug",11);
// pablo.showAprobado() 
// johanna.showAprobado() 
// maria.showAprobado() 
// lean.showAprobado() 
// glitch.showAprobado() 
// bug.showAprobado() 
