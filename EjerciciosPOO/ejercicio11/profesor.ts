import { Alumno } from "./alumno.js"

export class Professor {
    name:string
    listado:Alumno[];
    constructor(name:string){
        this.name = name
        this.listado = []
    }
    listarAlumno(alumno:Alumno){
        this.listado.push(alumno);
    }
}