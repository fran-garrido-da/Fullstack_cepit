import { Dice } from "../ejercicio7/dado.js";

export class Cubilete {
    protected dados:Dice[] = [];
    constructor(){
        for(let i=0;i<5;i++){
            this.dados[i] = new Dice()
        }
    }
    tirarDados(){
        this.dados.forEach(dado => {
            dado.roll();
            dado.show();
        })
        
    }
    public tirarDadoEspecifico(num:number){        
        this.dados[num-1].roll();
        this.dados[num-1].show();
    }
    public dadoSelector(numDados: number,pos1: number,pos2: number,pos3: number,pos4: number){
        switch (numDados) {
            case 2:
                this.tirarDadoEspecifico(pos1);
                this.tirarDadoEspecifico(pos2);
                break;
            case 3:
                this.tirarDadoEspecifico(pos1);
                this.tirarDadoEspecifico(pos2);
                this.tirarDadoEspecifico(pos3);
                break;
                case 4:
                this.tirarDadoEspecifico(pos1);
                this.tirarDadoEspecifico(pos2);
                this.tirarDadoEspecifico(pos3);
                this.tirarDadoEspecifico(pos4);
                break;
            default:
                break;
        }
    }
    public getDados(){
        return this.dados
    }
}

// const vaso = new Cubilete();
// console.log("All Dice: ");
// vaso.tirarDados();
// console.log("Specific Die, one by one in order: ");
// vaso.tirarDadoEspecifico(1);
// vaso.tirarDadoEspecifico(2);
// vaso.tirarDadoEspecifico(3);
// vaso.tirarDadoEspecifico(4);
// vaso.tirarDadoEspecifico(5);
// console.log("Specific sets of dice(selected 2, 3 ,4 in order. posiciones random): ");
// console.log("Set 1, 2 dados, pos 1 y 4:");
// vaso.dadoSelector(2,1,4,0,0);
// console.log("Set 1, 3 dados, pos 2, 5 y 4");
// vaso.dadoSelector(3,2,5,4,0);
// console.log("Set 1, 4 dados, pos 5, 3, 1, 2");
// vaso.dadoSelector(4,5,3,1,2);