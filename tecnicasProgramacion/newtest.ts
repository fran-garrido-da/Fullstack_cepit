import * as rlSync from "readline-sync";
console.clear();
const beastRaces: string[] = [
  "Tiger", //Bloodline of the White Tiger
  "Monkey", //Bloodline of Sun Wukong
  "Turtle", //Bloodline of the Black Tortoise
  "Bull", //Bloodline of the Golden Bull
  "Eagle", //Bloodline of the Skydancer Eagle
];
const monsterRaces: string[] = [
  "Jörmungandr", //Inheritor of Jörmungandr
  "Thunderbird", //Inheritor of Zeus
  "Dragon of Calamity", //Inheritor of the Dragon of Calamity
  "Fenrir", // Inheritor of Fenrir
  "Lich", //Lich
];
const RACES: string[] = [
  "Beast",
  "Beastman",
  "Monster",
  "Demon",
  "Human",
  "Demigod",
  "God",
];
type skill={
  name:string,
  index:number,
  level:number,
  exp:number,
  multi1:number,
  multi2:number
} 
let pj: any = {

  physique: {},
  skills: [],
  physicalStats:{},
  selectRace() {
    this.race = RACES[Math.floor(Math.random() * (RACES.length - 1))];
  },
  selectSubrace() {
    let rng2 = Math.round(Math.random() * 10);
    let monsterLgth = monsterRaces.length;
    let beastLgth = beastRaces.length;
    if (this.race === RACES[0] || this.race === RACES[1]) {
      for (let i = 0; i < rng2; i++) {
        this.subrace = beastRaces[Math.floor(Math.random() * beastLgth)];
      }
    } else if (this.race === RACES[2] || this.race === RACES[3]) {
      for (let i = 0; i < rng2; i++) {
        this.subrace = monsterRaces[Math.floor(Math.random() * monsterLgth)];
      }
    }
  },
  startQiCultivation() {
    this.cultivExp = 1;
    this.realm = {},
    this.realm.level = 0;
    this.realm.purification = 0;
    this.realm.subrealm = {},
    this.realm.subrealm.accum = 0;
    this.realm.subrealm.compression = 0;
    
  },
  cultivate() {
    this.realm.subrealm.accum = this.realm.subrealm.accum + this.cultivExp;
  },
  physicalInit() {
    this.physicalStats.stamina = 1
    this.physicalStats.strength = 1
    this.physicalStats.agility = 1
    this.physique.blood = {};
    this.physique.blood.forging = 0;
    this.physique.blood.refining = 0;
    this.physique.bones = {};
    this.physique.bones.refining = 0;
    this.physique.bones.forging = 0;
    this.physique.muscle = {};
    this.physique.muscle.refining = 0;
    this.physique.muscle.forging = 0;
    this.physique.tendons = {};
    this.physique.tendons.refining = 0;
    this.physique.tendons.forging = 0;
    this.physique.organs = {};
    this.physique.organs.refining = 0;
    this.physique.organs.forging = 0;
    this.physique.meridians = {};
    this.physique.meridians.max = 108;
    this.physique.meridians.open = 0;
    this.physique.meridians.strength = 1;
  },
  physicalRefining(forging: number, refining: number) {
    if (forging < 100) {
      forging++;
    } else if (refining < 100) {
      refining++;
      forging = 0;
    }
  },
  learnSkill(name:string){
    let skill:skill = {
      name: name,
      index: 0,
      exp: 0,
      level: 1,
      multi1: Math.round(Math.random()*100),
      multi2: 1
    }
    pj.skills[pj.skills.length] = skill
    skill.index = pj.skills.length-1
  },
  trainingOptions() {
    console.log(`\n How would you like to train?
        \n []BODY = train your strength and reflexes for a year.
        \n []TECHNIQUES = Practice your techniques and strategies for a year.
        \n []WEAPONS = Train with your weapon of choice`);
    
  },
  bodyTraining(){
    
  },
  techniqueTraining(){

  },
  weaponTrainingChoice(){
    console.log(`\nChoose what to train with:
      \n[1]: Swords
      \n[2]: Sabres
      \n[3]: Maces
      \n[4]: Spears
      \n[5]: Knives
      \n[6]: Bows
      \n[7]: Thrown weapons
      \n[8]: Greatweapons
      \n[9]: Exotic weapons
      \nKeep in mind, that you have to own the type of weapon to train with
      \nor be in a training institution that has them.`);
  },
  weaponTraining(){
    
  },
  findSkill(name:string):number{
   let range= pj.skills.length
   let result:number = -1 
   for (let i = 0;i<range;i++){
      if (pj.skills[i].name===name){
        result = pj.skills[i].index
      }
    }
    return result
  }
};

pj.status = "healthy";
pj.name = rlSync.question(`\nIntroduzca nombre de personaje: `);
pj.learnSkill("Forging")
pj.learnSkill("Mining")
console.log(`\nSkill: ${pj.skills[pj.findSkill("Forging")].name}
             \nLevel: ${pj.skills[pj.findSkill("Forging")].level}
             \nExp: ${pj.skills[pj.findSkill("Forging")].exp}`)



rlSync.question()

