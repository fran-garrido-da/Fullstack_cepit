class Calculadora {
    private numA:number
    private numB:number
    constructor(a:number,b:number) {
        this.numA = a;
        this.numB = b
    }
    public suma(){
        return this.numA+this.numB
    }
    public resta(){
        return this.numA-this.numB
    }
    public multi(){
        if(this.numA===0 || this.numB===0){
            return 0
        }else return this.numA*this.numB
    }
    public div(){
        if(this.numB===0){
            return "Ingrese numero válido"
        }else return (this.numA/this.numB).toFixed(2);
    }
    public numASet(a:number):void{
        this.numA = a;
    }
    public numBSet(b:number):void{
        this.numB = b;
    }
    public mostrar(resultado){
        console.log(resultado);
    }
}

const calc = new Calculadora(3,8);
calc.mostrar(`Suma: ${calc.suma()}`);
calc.mostrar(`Resta: ${calc.resta()}`);
calc.mostrar(`Multiplicacion:${calc.multi()}`);
calc.mostrar(`Division:${calc.div()}`);
console.log(`\n`);
const calc2 = new Calculadora(-4,-5);
calc2.mostrar(`Suma: ${calc2.suma()}`);
calc2.mostrar(`Resta: ${calc2.resta()}`);
calc2.mostrar(`Multiplicacion:${calc2.multi()}`);
calc2.mostrar(`Division:${calc2.div()}`);
console.log(`\n`);
const calc3= new Calculadora(2,-2);
calc3.mostrar(`Suma: ${calc3.suma()}`);
calc3.mostrar(`Resta: ${calc3.resta()}`);
calc3.mostrar(`Multiplicacion:${calc3.multi()}`);
calc3.mostrar(`Division:${calc3.div()}`);
console.log(`\n`);
const calc4 = new Calculadora(-1,14);
calc4.mostrar(`Suma: ${calc4.suma()}`);
calc4.mostrar(`Resta: ${calc4.resta()}`);
calc4.mostrar(`Multiplicacion:${calc4.multi()}`);
calc4.mostrar(`Division:${calc4.div()}`);
console.log(`\n`);
const calc5 = new Calculadora(0,5);
calc5.mostrar(`Suma: ${calc5.suma()}`);
calc5.mostrar(`Resta: ${calc5.resta()}`);
calc5.mostrar(`Multiplicacion:${calc5.multi()}`);
calc5.mostrar(`Division:${calc5.div()}`);
console.log(`\n`);
const calc6 = new Calculadora(7,0);
calc6.mostrar(`Suma: ${calc6.suma()}`);
calc6.mostrar(`Resta: ${calc6.resta()}`);
calc6.mostrar(`Multiplicacion:${calc6.multi()}`);
calc6.mostrar(`Division:${calc6.div()}`);

