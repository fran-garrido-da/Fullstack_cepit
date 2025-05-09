import { Libro } from "../ejercicio5/libro.js";

class GestorDeLibros {
  colection: Libro[];
  constructor() {
    this.colection = [];
  }

  //VERIFICADOR
  verif(isbn: number) {
    let verif: boolean =
      this.colection.find((item) => item.getIsbn() === isbn) === undefined;
    return verif;
  }
  searchIsbn(isbn: number) {
    if (!this.verif(isbn)) {
      return this.colection.filter((item) => item.getIsbn() === isbn)[0];
    }
  }
  insertarLibro() {
    const newLibro = new Libro();
    newLibro.cargarLibro();
    if (this.verif(newLibro.getIsbn())) {
      this.colection.push(newLibro);
      console.log(`Nuevo libro agregado, numero ISBN: ${newLibro.getIsbn()}`);
    } else {console.log(
        `El libro de numero ISBN ${newLibro.getIsbn()} ya se encuentra en registro`
      );
    }
  }
  consultarLibro(isbn: number) {
    if (!this.verif(isbn)) {
      let libroConsultado = this.searchIsbn(isbn);
      libroConsultado?.mostrarLibro();
    } else {
      console.log(
        `El libro de numero ISBN ${isbn} no se encuentra en registro`
      );
    }
  }
  modificarLibro(isbn: number) {
    if (this.verif(isbn)) {
      const libroModificado = this.searchIsbn(isbn);
      libroModificado?.setTitulo();
      libroModificado?.setAutor();
      libroModificado?.setAño();
      libroModificado?.setPaginas();
    } else {
      console.log(
        `El libro de numero ISBN ${isbn} no se encuentra en registro`
      );
    }
  }
  logicDeleteLibro(isbn: number) {
    if (!this.verif(isbn)) {
      this.searchIsbn(isbn)?.setLogicStateFalse();
    } else {
      console.log(
        `El libro de numero ISBN ${isbn} no se encuentra en registro`
      );
    }
  }
  logicRestoreLibro(isbn: number) {
    if (!this.verif(isbn)) {
      this.searchIsbn(isbn)?.setLogicStateTrue();
    } else {
      console.log(
        `El libro de numero ISBN ${isbn} no se encuentra en registro`
      );
    }
  }
  mostrarColection(){
    this.colection.forEach(item=> item.mostrarLibro());
  }
}

const libreria = new GestorDeLibros()
// Test insertar| 
libreria.insertarLibro();
libreria.insertarLibro();
libreria.insertarLibro();
libreria.mostrarColection();
// Test consulta
libreria.consultarLibro(123);
libreria.consultarLibro(321);
libreria.consultarLibro(124);
// Test modificar
libreria.modificarLibro(123);
libreria.modificarLibro(321);
libreria.modificarLibro(124);
libreria.mostrarColection();
// Test eliminar
libreria.logicDeleteLibro(123);
libreria.logicDeleteLibro(321);
libreria.logicDeleteLibro(124);
libreria.mostrarColection();
// Test restore
libreria.logicRestoreLibro(123);
libreria.logicRestoreLibro(321);
libreria.logicRestoreLibro(124);
libreria.mostrarColection();