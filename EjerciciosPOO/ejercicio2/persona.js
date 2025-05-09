"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad) {
        this.edad = 0;
        this.puntos = 0;
        this.tiros = 3;
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.envejecer = function () {
        this.edad += 1;
    };
    Persona.prototype.setPuntos = function (puntos) {
        this.puntos = puntos;
    };
    Persona.prototype.getPuntos = function () {
        return this.puntos;
    };
    Persona.prototype.getTiros = function () {
        return this.tiros;
    };
    Persona.prototype.tirarDados = function () {
        this.tiros--;
    };
    return Persona;
}());
exports.Persona = Persona;
