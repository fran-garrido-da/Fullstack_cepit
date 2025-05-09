import {Auto} from "../ejercicio1/auto.js"
export class AutoRegistro {
    private auto:Auto
    private logicState:boolean
    constructor(auto:Auto){
        this.auto = auto;
    }
    public setLogicTrue(){
        this.logicState = true
    }
    public setLogicFalse(){
        this.logicState = false
    }
    public getLogicState(){
        return this.logicState
    }
    public getPatente(){
        return this.auto.getPatente()
    }
    public getAuto(){
        return this.auto
    }
    public setAuto(auto:Auto):void {
        this.auto = auto
    }
}