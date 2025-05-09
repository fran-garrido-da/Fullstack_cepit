export class Televisor {
  private marca: string;
  private encendido: boolean;
  private canales: number = 100;
  private canal: number = 1;
  private smart: boolean;
  private aplicaciones: string[];
  constructor(marca: string, smart: boolean) {
    this.marca = marca;
    this.smart = smart;
  }
  public powerButton() {
    this.encendido = !this.encendido;
  }
  private getEncendido() {
    return this.encendido;
  }
  public mostrarEncendido() {
    return this.getEncendido() ? "" : "El televisor esta encendido";
  }
  public mostrarCanal() {
    return this.getEncendido() ? "" : `Canal :${this.canal}`;
  }
  private getMarca() {
    return this.marca;
  }
  public mostrarMarca() {
    return this.getEncendido() ? "" : `Televisor marca ${this.getMarca()}`;
  }
  public cambiarCanal(direccion: boolean) {
    this.getEncendido()
      ? ""
      : direccion
      ? this.canal === 1
        ? this.canal--
        : ""
      : this.canal++;
  }
  private getSmart() {
    return this.smart;
  }
  public instalarApp(app: string) {
    this.getEncendido()
      ? ""
      : this.getSmart()
      ? ""
      : this.aplicaciones.push(app);
  }
  public getListaApp() {
    if (this.getSmart()) {
      let appList = "";
      this.aplicaciones.forEach((element) => {
        let app = `${element} 
            \n`;
        appList += app;
      });
      return appList;
    }
  }
  public usarAppNombre(nombre: string) {
    if (this.getSmart()) {
      let app = this.aplicaciones.filter((item) => item === nombre);
      return app ? `No existe aplicacion ${nombre}` : `Inicializando ${app}`;
    } else return "Este televisor no es Smart";
  }
}
