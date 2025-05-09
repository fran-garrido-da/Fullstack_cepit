import { Alumno } from "./alumno.js";
import { Professor } from "./profesor.js";

class Escuela {
    alumnos:Alumno[]
    profesores: Professor[]
    constructor(){
        this.alumnos = [];
        this.profesores = [];
    }
    public matricular(name:string,nota:number){
        this.alumnos.push(new Alumno(name,nota));
    }
    public contratar(name:string){
        this.profesores.push(new Professor(name));
    }
    public expulsar(name:string){
        let searchindex = this.alumnos.findIndex(item => item.name ===name)
        this.alumnos.splice(searchindex,1);
    }
    public despedir(name:string){
        let searchindex = this.profesores.findIndex(item => item.name ===name)
        this.profesores.splice(searchindex,1);
    }
}

const primaria:Escuela = new Escuela();

primaria.matricular("Sebastian",10);
primaria.matricular("Matias",7);
primaria.matricular("Belen",6);
primaria.matricular("Santiago",1);

primaria.contratar("Mario");
primaria.contratar("Sandra");
primaria.contratar("Marcos");
primaria.contratar("Corina");

console.log(primaria.alumnos)
console.log(primaria.profesores)
primaria.alumnos.forEach(alum => {
    primaria.profesores.forEach(prof => prof.listarAlumno(alum))
});
primaria.profesores.forEach(prof => {
    console.log(`\nProfesor: ${prof.name}`)
    console.log("Alumnos: ")
    prof.listado.forEach(alum => console.log(`${alum.name}`))
})