"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dice = void 0;
var Dice = /** @class */ (function () {
    function Dice() {
        this.face = Math.floor(1 + Math.random() * 6);
    }
    Dice.prototype.roll = function () {
        this.face = Math.floor(1 + Math.random() * 6);
        //console.log(`Rolling...`);
    };
    Dice.prototype.show = function () {
        console.log("Rolled a ".concat(this.face));
    };
    return Dice;
}());
exports.Dice = Dice;
// const dado = new Dice();
// console.log(`Rolled a ${dado.show()}`);
// dado.roll();
// console.log(`Rolled a ${dado.show()}`);
// dado.roll();
// console.log(`Rolled a ${dado.show()}`);
// dado.roll();
// console.log(`Rolled a ${dado.show()}`);
