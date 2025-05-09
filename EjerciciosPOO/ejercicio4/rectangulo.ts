class Rectangulo{
    private ancho: number
    private altura: number
    constructor(ancho:number,altura:number){
        this.ancho = ancho
        this.altura= altura
    }
    public calcular_area(){
        return this.ancho*this.altura
    }
    public calcular_perimetro(){
        return 2*(this.altura+this.ancho)
    }
}

const rectanguloTest = new Rectangulo(5,10);

console.log(rectanguloTest.calcular_area())
console.log(rectanguloTest.calcular_perimetro())