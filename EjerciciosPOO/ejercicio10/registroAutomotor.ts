import { Auto } from "../ejercicio1/auto.js";
import { AutoRegistro } from "./autoRegistro.js";
class Registro {
  private database:Array<AutoRegistro>
  constructor() {
    this.database = [];
  }
  addAuto(auto: AutoRegistro) {
    auto.setLogicTrue();
    this.database.includes(auto)
      ? console.log(`This car is already in the registry`)
      : this.database.push(auto);

  }
  searchAuto(patente:string):AutoRegistro{
    let searchIndex = this.database.findIndex(item => item.getPatente()===patente)
    let searchTarget = this.database[searchIndex];
    return searchTarget
  }
  updateAuto(patente:string,update:AutoRegistro){
     this.searchAuto(patente).setAuto(update.getAuto());
     this.searchAuto(patente).setLogicTrue()
  }
  deleteAuto(patente:string){
    this.searchAuto(patente).setLogicFalse();
  }
  Auto(patente:string){
    this.searchAuto(patente).setLogicFalse();
  }
  show(item:any){
    console.log(item)
  }
}
const auto = new Auto("Opel",2002,"patente");
const autoReg = new AutoRegistro(auto);

const reg = new Registro();

reg.addAuto(autoReg);
reg.show(reg.searchAuto("patente"));
console.log(reg)