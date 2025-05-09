"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoRegistro = void 0;
var AutoRegistro = /** @class */ (function () {
    function AutoRegistro(auto) {
        this.auto = auto;
    }
    AutoRegistro.prototype.setLogicTrue = function () {
        this.logicState = true;
    };
    AutoRegistro.prototype.setLogicFalse = function () {
        this.logicState = false;
    };
    AutoRegistro.prototype.getLogicState = function () {
        return this.logicState;
    };
    AutoRegistro.prototype.getPatente = function () {
        return this.auto.getPatente();
    };
    AutoRegistro.prototype.getAuto = function () {
        return this.auto;
    };
    AutoRegistro.prototype.setAuto = function (auto) {
        this.auto = auto;
    };
    return AutoRegistro;
}());
exports.AutoRegistro = AutoRegistro;
