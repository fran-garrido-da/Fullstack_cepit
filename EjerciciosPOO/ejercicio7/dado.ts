export class Dice {
    face:number
    constructor(){
        this.face = Math.floor(1+Math.random()*6);
    }
    roll(){
        this.face = Math.floor(1+Math.random()*6);
        //console.log(`Rolling...`);
    }
    show(){
        console.log(`Rolled a ${this.face}`);
    }
}
// const dado = new Dice();

// console.log(`Rolled a ${dado.show()}`);
// dado.roll();
// console.log(`Rolled a ${dado.show()}`);
// dado.roll();
// console.log(`Rolled a ${dado.show()}`);
// dado.roll();
// console.log(`Rolled a ${dado.show()}`);