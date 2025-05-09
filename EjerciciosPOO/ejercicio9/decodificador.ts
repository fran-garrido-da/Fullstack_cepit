import { Televisor } from "../ejercicio3/televisor.js";
class Decodificador {
  tv: Televisor;
  marca: string;
  serial: number;
  on: boolean;
  constructor(marcaDeco: string, marcaTv: string, smartTv: boolean) {
    this.marca = marcaDeco;
    this.tv = new Televisor(marcaTv, smartTv);
    this.serial = Math.round(Math.random() * 1000000);
  }
  channelUp() {
    if (this.on) {
      this.tv.cambiarCanal(true);
    }
  }
  channelDown() {
    if (this.on) {
      this.tv.cambiarCanal(false);
    }
  }
  toggleDecoPower() {
    this.on = !this.on;
  }
  toggleTvPower() {
    this.tv.powerButton();
  }
  canalShow(){
    this.tv.mostrarCanal();
  }
}

const tvDeco = new Decodificador("Google","Samsan",true);

tvDeco.toggleTvPower();
tvDeco.toggleDecoPower();
tvDeco.channelUp();
tvDeco.canalShow();


