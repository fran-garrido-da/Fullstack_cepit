export class Persona {
    private nombre:string
    private apellido:string
    private edad:number = 0

    private puntos:number = 0
    private tiros:number=3
    constructor(nombre:string,apellido:string,edad:number){
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
    }
    public getNombre(){
        return this.nombre
    }
    public getApellido(){
        return this.apellido
    }
    public getEdad(){
        return this.edad
    }
    public envejecer(){
        this.edad += 1
    }
    public setPuntos(puntos:number){
        this.puntos = puntos
    }
    public getPuntos(){
        return this.puntos
    }
    public getTiros(){
        return this.tiros
    }
    tirarDados(){
        this.tiros--
    }
}