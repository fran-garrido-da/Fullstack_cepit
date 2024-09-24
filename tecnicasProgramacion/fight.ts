import * as rlSync from "readline-sync"

let fightCounter: number = 0;
let win:number = 0
let player = {
  level: 1,
  hp: 100,
  defense: Math.round(Math.random() *  20),
  attack: Math.round(Math.random() *  20),
  speed: Math.round(Math.random() *  20),
  initiative: false,
};
let enemy = {
  hp:  100,
  defense: Math.round(Math.random() *  20),
  attack: Math.round(Math.random() *  20),
  speed: Math.round(Math.random() *  20),
  initiative: false,
};
if (player.speed <= enemy.speed) {
  enemy.initiative = true;
} else if (player.speed > enemy.speed) {
  player.initiative = true;
}

function fight(player: { hp: number; initiative: boolean; attack: number; defense: number; },enemy: { hp: number; defense: number; initiative: boolean; attack: number; }){

while(player.hp > 0 && enemy.hp > 0) {
    if (player.initiative == true) {
      enemy.hp = enemy.hp - Math.round(player.attack * 5 / enemy.defense);
      console.log(`You have dealt ${Math.round(player.attack * 5 / enemy.defense)} damage`);
      console.log(`Enemy HP is now ${enemy.hp}`);
      enemy.initiative = !enemy.initiative;
      player.initiative = !player.initiative;
    }
    if (enemy.initiative == true) {
      player.hp = player.hp - Math.round(enemy.attack * 5/ player.defense);
      console.log(`You have been dealt ${Math.round(player.attack * 5 / enemy.defense)} damage`);
      console.log(`Your HP is now ${player.hp} damage`);
      enemy.initiative = !enemy.initiative;
      player.initiative = !player.initiative;
    }
  }
  if (player.hp>0){
    console.log(`You have won`)
    fightCounter++
    win++
  }else{
    console.log(`You have lost`)
    fightCounter++
  }
  console.log(`Winrate: ${(win/fightCounter)*100}%`)

}

let input:number = rlSync.questionInt(`Number of fights: `)

while (input!=0){
    for (let i:number = 1;i<=input;i++){
      player.hp= 100
      enemy.hp = 100
        fight(player,enemy)
    }
    input = rlSync.questionInt(`Number of fights: `)
}