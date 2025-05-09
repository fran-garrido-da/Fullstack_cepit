"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auto_js_1 = require("../ejercicio1/auto.js");
var autoRegistro_js_1 = require("./autoRegistro.js");
var Registro = /** @class */ (function () {
    function Registro() {
        this.database = [];
    }
    Registro.prototype.addAuto = function (auto) {
        auto.setLogicTrue();
        this.database.includes(auto)
            ? console.log("This car is already in the registry")
            : this.database.push(auto);
    };
    Registro.prototype.searchAuto = function (patente) {
        var searchIndex = this.database.findIndex(function (item) { return item.getPatente() === patente; });
        var searchTarget = this.database[searchIndex];
        return searchTarget;
    };
    Registro.prototype.updateAuto = function (patente, update) {
        this.searchAuto(patente).setAuto(update.getAuto());
        this.searchAuto(patente).setLogicTrue();
    };
    Registro.prototype.deleteAuto = function (patente) {
        this.searchAuto(patente).setLogicFalse();
    };
    Registro.prototype.Auto = function (patente) {
        this.searchAuto(patente).setLogicFalse();
    };
    Registro.prototype.show = function (item) {
        console.log(item);
    };
    return Registro;
}());
var auto = new auto_js_1.Auto("Opel", 2002, "patente");
var autoReg = new autoRegistro_js_1.AutoRegistro(auto);
var reg = new Registro();
reg.addAuto(autoReg);
reg.show(reg.searchAuto("patente"));
console.log(reg);
