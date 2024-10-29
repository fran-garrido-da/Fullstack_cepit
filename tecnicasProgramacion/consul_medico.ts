// Un consultorio médico necesita gestionar las citas de sus pacientes. El sistema debe permitir las siguientes acciones:
// Registrar una cita médica (nombre del paciente y fecha).
// Cancelar una cita médica ingresando el nombre del paciente.
// Mostrar las citas registradas.
// Salir del sistema.
// El sistema debe verificar si ya existe una cita para un paciente antes de agregar una nueva.
import * as rlSync from "readline-sync"

interface citaMedica{
    paciente:string,
    fecha:string
}
let citas:citaMedica[] =[]
