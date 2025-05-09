"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var televisor_js_1 = require("../ejercicio3/televisor.js");
var Decodificador = /** @class */ (function () {
    function Decodificador(marcaDeco, marcaTv, smartTv) {
        this.marca = marcaDeco;
        this.tv = new televisor_js_1.Televisor(marcaTv, smartTv);
        this.serial = Math.round(Math.random() * 1000000);
    }
    Decodificador.prototype.channelUp = function () {
        if (this.on) {
            this.tv.cambiarCanal(true);
        }
    };
    Decodificador.prototype.channelDown = function () {
        if (this.on) {
            this.tv.cambiarCanal(false);
        }
    };
    Decodificador.prototype.toggleDecoPower = function () {
        this.on = !this.on;
    };
    return Decodificador;
}());
