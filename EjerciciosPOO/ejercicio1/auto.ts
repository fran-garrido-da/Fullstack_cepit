export class Auto {
  private marca: string;
  private modelo: number;
  private estado: boolean;
  private tanque: number;
  private patente:string
  constructor(marca: string, modelo: number,patente:string) {
    this.marca = marca;
    this.modelo = modelo;
    this.tanque = 100;
    this.estado = false
    this.patente = patente
  }
  public onOff() {
    this.estado = !this.estado;
  }
  public cargarCombustible(cantidad: number, estado?: string) {
    if (cantidad>0) {
      this.tanque += cantidad;
      if (this.tanque > 100) {
        this.tanque = 100;
      }
    }
    if (estado!=='') {
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
  }
  public gastoCombustible(gasto:number){
    if(gasto <= this.tanque){
        this.tanque -= gasto;
    }else if(this.estado == true) {this.onOff()}
  }
  public getMarca(){
    return this.marca
  }
  public getModelo(){
    return this.modelo
  }
  public getTanque(){
    return this.tanque
  }
  public getEstado(){
    if (this.estado === false){
        return 'Apagado'
    }
    if (this.estado === true){
        return 'Encendido'
    }
  }
  public getPatente(){
    return this.patente
  }
}


