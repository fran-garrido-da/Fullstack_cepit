import { Persona } from "../ejercicio2/persona.js";
import { Cubilete } from "../ejercicio12/cubilete.js";
class Generala {
  jugadores: Persona[] = [];
  cubilete: Cubilete;
  constructor() {
    this.jugadores.push(new Persona("juan", "gonzales", 30));
    this.jugadores.push(new Persona("mario", "lopez", 30));
    this.jugadores.push(new Persona("silvia", "gutierrez", 30));
    this.jugadores.push(new Persona("laura", "martinez", 30));
    this.cubilete = new Cubilete();
  }
  getJugador(puntos: number) {
    return this.jugadores.filter((item) => item.getPuntos() === puntos)[0];
  }
  getDados() {
    let caras = this.cubilete.getDados().map((item) => item.face);
    caras = caras.sort();
    return caras;
  }
  private isEscalera(caras: number[]) {
    let escalera1 = [1, 2, 3, 4, 5];
    let escalera2 = [2, 3, 4, 5, 6];
    let escalera3 = [1, 3, 4, 5, 6];
    if (caras === escalera1 || caras === escalera2 || caras === escalera3) {
      return true;
    }
  }
  private isFull(caras: number[]) {
    if (caras[0] == caras[1] && caras[2] == caras[3] && caras[3] == caras[4]) {
      return true;
    } else return false;
  }
  private isPoker(caras: number[]) {
    const range = caras.length - 2;
    let igualesA = 0;
    let igualesB = 0;
    for (let i = 0; i < range; i++) {
      if (caras[i] == caras[i + 1]) {
        igualesA++;
      }
    }
    for (let i = range; i >= 0; i--) {
      if (caras[i] == caras[i - 1]) {
        igualesB++;
      }
    }
    if (igualesB === 4) {
      return true;
    } else if (igualesA === 4) {
      return true;
    } else return false;
  }
  private isGenerala(caras: number[]) {
    let carasFiltradas = caras.filter((cara) => cara === caras[0]);
    if (carasFiltradas === caras) {
      return true;
    } else return false;
  }
  tirarDados(jugador:Persona) {
      console.log(`Jugador ${jugador.getNombre()} tira sus dados...`);
      if (jugador.getTiros() > 0 && jugador.getTiros() <= 3){
      this.cubilete.tirarDados();
      jugador.tirarDados();
      this.sumarPuntos(jugador);
      }
        

  }
  sumarPuntos(jugador:Persona) {
    const caras = this.getDados();
      if (this.isEscalera(caras)) {
        jugador.setPuntos(jugador.getPuntos() + 20);
        console.log(`${jugador.getNombre()} suma 20 puntos`);
      }
      if (this.isFull(caras)) {
        jugador.setPuntos(jugador.getPuntos() + 30);
        console.log(`${jugador.getNombre()} suma 30 puntos`);
      }
      if (this.isPoker(caras)) {
        jugador.setPuntos(jugador.getPuntos() + 40);
        console.log(`${jugador.getNombre()} suma 40 puntos`);
      }
      if (this.isGenerala(caras)) {
        jugador.setPuntos(jugador.getPuntos() + 50);
        console.log(`${jugador.getNombre()} suma 50 puntos`);
      }
  }
  finalizar() {
    let sum = 0;
    this.jugadores.forEach((jugador) => {
      if (jugador.getTiros() === 0) {
        sum++;
      }
    });
    if (sum === this.jugadores.length) {
      console.log(`Fin del juego`);
      console.log(`Puntajes: `);
      this.jugadores.forEach((jugador) => {
        console.log(`${jugador.getNombre()}: ${jugador.getPuntos()} puntos`);
      });
      //Funcion para devolver la persona con mas puntos (copiada Stackoverflow)
      const max = this.jugadores.reduce(function(prev, current) {
        return (prev && prev.getPuntos() > current.getPuntos()) ? prev : current
      })
      let empate = this.jugadores.filter(jugador=>jugador.getPuntos()===max.getPuntos())
      if(empate.length>1){
        this.desempate(empate[0].getNombre(),empate[1].getNombre());
      }else
      console.log(`${max.getNombre()} es el ganador!!`)
    }
  }
  desempate(name1:string,name2:string){
    let value1 = Math.round(Math.random()*10);
    let value2 = Math.round(Math.random()*10);
    while(value1===value2){
        value1 = Math.round(Math.random()*10);
        value2 = Math.round(Math.random()*10);
    }
    if(value1>value2){
        console.log(`${name1} es el ganador!!`)
    }
    if(value1>value2){
        console.log(`${name1} es el ganador!!`)
    }
  }
  turno() {
    this.jugadores.forEach(jugador => {
    this.finalizar();
    this.tirarDados(jugador);
    })
  }
}

const juego = new Generala()
console.log("Turno 1:");
juego.turno();
console.log("Turno 2:");
juego.turno();
console.log("Turno 3:");
juego.turno();
console.log("Turno 4:");
juego.turno();
