"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor(marca, smart) {
        this.canales = 100;
        this.canal = 1;
        this.marca = marca;
        this.smart = smart;
    }
    Televisor.prototype.powerButton = function () {
        this.encendido = !this.encendido;
    };
    Televisor.prototype.getEncendido = function () {
        return this.encendido;
    };
    Televisor.prototype.mostrarEncendido = function () {
        return this.getEncendido() ? "" : "El televisor esta encendido";
    };
    Televisor.prototype.mostrarCanal = function () {
        return this.getEncendido() ? "" : "Canal :".concat(this.canal);
    };
    Televisor.prototype.getMarca = function () {
        return this.marca;
    };
    Televisor.prototype.mostrarMarca = function () {
        return this.getEncendido() ? "" : "Televisor marca ".concat(this.getMarca());
    };
    Televisor.prototype.cambiarCanal = function (direccion) {
        this.getEncendido()
            ? ""
            : direccion
                ? this.canal === 1
                    ? this.canal--
                    : ""
                : this.canal++;
    };
    Televisor.prototype.getSmart = function () {
        return this.smart;
    };
    Televisor.prototype.instalarApp = function (app) {
        this.getEncendido()
            ? ""
            : this.getSmart()
                ? ""
                : this.aplicaciones.push(app);
    };
    Televisor.prototype.getListaApp = function () {
        if (this.getSmart()) {
            var appList_1 = "";
            this.aplicaciones.forEach(function (element) {
                var app = "".concat(element, " \n            \n");
                appList_1 += app;
            });
            return appList_1;
        }
    };
    Televisor.prototype.usarAppNombre = function (nombre) {
        if (this.getSmart()) {
            var app = this.aplicaciones.filter(function (item) { return item === nombre; });
            return app ? "No existe aplicacion ".concat(nombre) : "Inicializando ".concat(app);
        }
        else
            return "Este televisor no es Smart";
    };
    return Televisor;
}());
exports.Televisor = Televisor;
