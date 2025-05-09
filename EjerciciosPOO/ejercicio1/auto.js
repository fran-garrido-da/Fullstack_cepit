"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.tanque = 100;
        this.estado = false;
        this.patente = patente;
    }
    Auto.prototype.onOff = function () {
        this.estado = !this.estado;
    };
    Auto.prototype.cargarCombustible = function (cantidad, estado) {
        if (cantidad > 0) {
            this.tanque += cantidad;
            if (this.tanque > 100) {
                this.tanque = 100;
            }
        }
        if (estado !== '') {
            switch (estado) {
                case "1/4":
                    this.tanque = 25;
                    break;
                case "1/2":
                    this.tanque = 50;
                    break;
                case "3/4":
                    this.tanque = 75;
                    break;
                case "lleno":
                    this.tanque = 100;
                    break;
            }
        }
    };
    Auto.prototype.gastoCombustible = function (gasto) {
        if (gasto <= this.tanque) {
            this.tanque -= gasto;
        }
        else if (this.estado == true) {
            this.onOff();
        }
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getTanque = function () {
        return this.tanque;
    };
    Auto.prototype.getEstado = function () {
        if (this.estado === false) {
            return 'Apagado';
        }
        if (this.estado === true) {
            return 'Encendido';
        }
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    return Auto;
}());
exports.Auto = Auto;
