import * as rls from "readline-sync";

export class Libro{
    protected isbn:number
    protected titulo:string
    protected autor:string
    protected año:number
    protected paginas:number
    protected logicState:boolean
    constructor() {
        this.autor = 'Sin autor'
        this.isbn = 0
        this.paginas = 0
        this.titulo = 'Sin titulo'
        this.setLogicStateFalse();
    }
    public getIsbn(){
        return this.isbn
    }
    public getAutor(){
        return this.autor
    }
    public getAño(){
        return this.año
    }
    public getPaginas(){
        return this.paginas
    }
    public getTitulo(){
        return this.titulo
    }
    public setTitulo(){
        this.titulo = rls.question(`Ingrese titulo: `);
    }
    public setAutor(){
        this.autor = rls.question(`Ingrese autor: `);
    }
    public setAño(){
        this.año = rls.questionInt(`Ingrese año de edicion: `);
    }
    public setPaginas(){
        while (this.paginas <= 0){
            this.paginas = rls.questionInt(`Ingrese numero de paginas: `);
        }
    } 
    public cargarLibro(){
        this.isbn = rls.questionInt(`Ingrese Numero ISBM: `);
        this.setTitulo();
        this.setAutor();
        this.setAño();
        this.setPaginas();
        this.setLogicStateTrue();
     };
    public mostrarLibro(){
        if (this.isbn !== 0){
            console.log(`ISBM: ${this.isbn}
                \nTitulo: ${this.titulo}
                \nAutor: ${this.autor}
                \nAño: ${this.año}
                \nNumero de paginas: ${this.paginas}`);
        }
    }
    public setLogicStateTrue(){
        this.logicState = true
    }
    public setLogicStateFalse(){
        this.logicState = false
    }
}

// const firstBook = new Libro();
// const secondBook = new Libro();
// const thirdBook = new Libro();
// firstBook.cargarLibro();
// firstBook.mostrarLibro();
// secondBook.cargarLibro();
// secondBook.mostrarLibro();
// thirdBook.cargarLibro();
// thirdBook.mostrarLibro();



