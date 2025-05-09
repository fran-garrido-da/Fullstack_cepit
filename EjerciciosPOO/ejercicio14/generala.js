"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_js_1 = require("../ejercicio2/persona.js");
var cubilete_js_1 = require("../ejercicio12/cubilete.js");
var Generala = /** @class */ (function () {
    function Generala() {
        this.jugadores = [];
        this.jugadores.push(new persona_js_1.Persona("juan", "gonzales", 30));
        this.jugadores.push(new persona_js_1.Persona("mario", "lopez", 30));
        this.jugadores.push(new persona_js_1.Persona("silvia", "gutierrez", 30));
        this.jugadores.push(new persona_js_1.Persona("laura", "martinez", 30));
        this.cubilete = new cubilete_js_1.Cubilete();
    }
    Generala.prototype.getJugador = function (puntos) {
        return this.jugadores.filter(function (item) { return item.getPuntos() === puntos; })[0];
    };
    Generala.prototype.getDados = function () {
        var caras = this.cubilete.getDados().map(function (item) { return item.face; });
        caras = caras.sort();
        return caras;
    };
    Generala.prototype.isEscalera = function (caras) {
        var escalera1 = [1, 2, 3, 4, 5];
        var escalera2 = [2, 3, 4, 5, 6];
        var escalera3 = [1, 3, 4, 5, 6];
        if (caras === escalera1 || caras === escalera2 || caras === escalera3) {
            return true;
        }
    };
    Generala.prototype.isFull = function (caras) {
        if (caras[0] == caras[1] && caras[2] == caras[3] && caras[3] == caras[4]) {
            return true;
        }
        else
            return false;
    };
    Generala.prototype.isPoker = function (caras) {
        var range = caras.length - 2;
        var igualesA = 0;
        var igualesB = 0;
        for (var i = 0; i < range; i++) {
            if (caras[i] == caras[i + 1]) {
                igualesA++;
            }
        }
        for (var i = range; i >= 0; i--) {
            if (caras[i] == caras[i - 1]) {
                igualesB++;
            }
        }
        if (igualesB === 4) {
            return true;
        }
        else if (igualesA === 4) {
            return true;
        }
        else
            return false;
    };
    Generala.prototype.isGenerala = function (caras) {
        var carasFiltradas = caras.filter(function (cara) { return cara === caras[0]; });
        if (carasFiltradas === caras) {
            return true;
        }
        else
            return false;
    };
    Generala.prototype.tirarDados = function (jugador) {
        console.log("Jugador ".concat(jugador.getNombre(), " tira sus dados..."));
        if (jugador.getTiros() > 0 && jugador.getTiros() <= 3) {
            this.cubilete.tirarDados();
            jugador.tirarDados();
            this.sumarPuntos(jugador);
        }
    };
    Generala.prototype.sumarPuntos = function (jugador) {
        var caras = this.getDados();
        if (this.isEscalera(caras)) {
            jugador.setPuntos(jugador.getPuntos() + 20);
            console.log("".concat(jugador.getNombre(), " suma 20 puntos"));
        }
        if (this.isFull(caras)) {
            jugador.setPuntos(jugador.getPuntos() + 30);
            console.log("".concat(jugador.getNombre(), " suma 30 puntos"));
        }
        if (this.isPoker(caras)) {
            jugador.setPuntos(jugador.getPuntos() + 40);
            console.log("".concat(jugador.getNombre(), " suma 40 puntos"));
        }
        if (this.isGenerala(caras)) {
            jugador.setPuntos(jugador.getPuntos() + 50);
            console.log("".concat(jugador.getNombre(), " suma 50 puntos"));
        }
    };
    Generala.prototype.finalizar = function () {
        var sum = 0;
        this.jugadores.forEach(function (jugador) {
            if (jugador.getTiros() === 0) {
                sum++;
            }
        });
        if (sum === this.jugadores.length) {
            console.log("Fin del juego");
            console.log("Puntajes: ");
            this.jugadores.forEach(function (jugador) {
                console.log("".concat(jugador.getNombre(), ": ").concat(jugador.getPuntos(), " puntos"));
            });
            //Funcion para devolver la persona con mas puntos (copiada Stackoverflow)
            var max_1 = this.jugadores.reduce(function (prev, current) {
                return (prev && prev.getPuntos() > current.getPuntos()) ? prev : current;
            });
            var empate = this.jugadores.filter(function (jugador) { return jugador.getPuntos() === max_1.getPuntos(); });
            if (empate.length > 1) {
                this.desempate(empate[0].getNombre(), empate[1].getNombre());
            }
            else
                console.log("".concat(max_1.getNombre(), " es el ganador!!"));
        }
    };
    Generala.prototype.desempate = function (name1, name2) {
        var value1 = Math.round(Math.random() * 10);
        var value2 = Math.round(Math.random() * 10);
        while (value1 === value2) {
            value1 = Math.round(Math.random() * 10);
            value2 = Math.round(Math.random() * 10);
        }
        if (value1 > value2) {
            console.log("".concat(name1, " es el ganador!!"));
        }
        if (value1 > value2) {
            console.log("".concat(name1, " es el ganador!!"));
        }
    };
    Generala.prototype.turno = function () {
        var _this = this;
        this.jugadores.forEach(function (jugador) {
            _this.finalizar();
            _this.tirarDados(jugador);
        });
    };
    return Generala;
}());
var juego = new Generala();
console.log("Turno 1:");
juego.turno();
console.log("Turno 2:");
juego.turno();
console.log("Turno 3:");
juego.turno();
console.log("Turno 4:");
juego.turno();
