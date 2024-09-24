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
const GRADES: Array<string> = [
  "Transcendent",
  "High-Heaven",
  "Middle-Heaven",
  "Low-Heaven",
  "High-Earth",
  "Middle-Earth",
  "Low-Earth",
  "High-Mortal",
  "Middle-Mortal",
  "Low-Mortal",
];
const prefix:string[]=[
  "Heaven's'",
  "Earth's",
  "Lord's",
  "Eight",
  "9th", 
  "Thirteen",
  "Hell's",
  "Demon's",
  "Fiend's",
  "Laborer's",
  "Evil",
  "Righteous",
  "Old",
  "Ancient",
  "Immemorial",
  "Eternal",
  "Instantaneous",
]
const faction:string[]=[
  //faction
  "Immortal",
  "Judgment",
  "Devilish",
  "Fiendish",
  "Heavenly",
  "Trigram"
]
const elemental1:string[]=[
  //--------Elemental 1
  "Fire",
  "Lightning",
  "Water",
  "Wind",
  "Cold",
  "Earthen",
  "Iron",
  "Light",
  "Shadow"
]
const elemental2:string[]=[
  //--------Elemental 2
  "Volcanic",
  "Storm",
  "Flooding",
  "Cyclonic",
  "Frost",
  "Mountains",
  "Silver",
  "Holy",
  "Cursed"
]
const elemental3:string[]=[
  "Inferno",
  "Thunderous",
  "Oceanic",
  "Hurricane",
  "Glacial",
  "World",
  "Golden",
  "Sanctified",
  "Desacrated"
]
const elemental4:string[]=[
  //--------Elemental 4
  "Fire God's ",
  "Lightning God's ",
  "Water God's ",
  "Wind God's ",
  "Eternal Frost ",
  "Earth God's ",
  "Star Iron ",
  "Heaven's",
  "Netherworld's",
]
type skill={
  name:string,
  index:number,
  level:number,
  exp:number,
  multi1:number,
  multi2:number
} 
type technique={
  name:string,
  index:number,
  level:number,
  type:string,
  grade:number,
  exp:number,
  multi1:number,
  multi2:number
} 
let pj: any = {

  physique: {},
  skills: [],
  techniques:[],
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
  findSkill(name:string):number{
    let range= pj.skills.length
    let result:number = -1 
    for (let i = 0;i<range;i++){
       if (pj.skills[i].name===name){
         result = pj.skills[i].index
       }
     }
     return result
  },
  learnTechnique(name1:string,name2:string,name3:string,type:string){
    let technique:technique = {
      name: name1+name2+name3,
      index: 0,
      exp: 0,
      level: 1,
      multi1: Math.round(Math.random() * 100),
      multi2: 1,
      type: type,
      grade: Math.floor(Math.random()*GRADES.length)
    }
    pj.techniques[pj.techniques.length] = technique
    technique.index = pj.techniques.length-1
  },
  findTechnique(name:string):number{
    let range= pj.techniques.length
    let result:number = -1 
    for (let i = 0;i<range;i++){
       if (pj.techniques[i].name===name){
         result = pj.techniques[i].index
       }
     }
     return result
  },
  trainingOptions() {
    console.log(`\n How would you like to train?
        \n []BODY = train your strength and reflexes for a year.
        \n []TECHNIQUES = Practice your techniques and strategies for a year.
        \n []WEAPONS = Train with your weapon of choice`);
    
  },
  bodyTrainingChoice(){
    console.log(`\n[1] = Train your stamina
                 \n[2] = Train your strength
                 \n[3] = Train your agility`)
    let input:number = rlSync.questionInt()  
    return input
  },
  bodyTraining(input:number){
    switch(input){
      case 1:
        pj.physicalStats.stamina++
        console.log(`You train your stamina, feeling more resilient`)
        break;
      case 2:
        pj.physicalStats.strength++
        console.log(`You train your strength, feeling more powerful`)
        break;
      case 3:
        pj.physicalStats.agility++
        console.log(`You train your agility, feeling faster and sharper`)
        break;
    }
  },
  techniqueTrainingChoice(){

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
  getSkillName(name:string){
    pj.skills[pj.findSkill(name)].name
  },
  getSkillLevel(name:string){
    pj.skills[pj.findSkill(name)].level
  },
  getSkillExp(name:string){
    pj.skills[pj.findSkill(name)].exp
  },
  getTechniqueName(name:string){
    pj.techniques[pj.findTechnique(name)].name
  },
  getTechniqueLevel(name:string){
    pj.techniques[pj.findTechnique(name)].level
  },
  getTechniqueExp(name:string){
    pj.techniques[pj.findTechnique(name)].exp
  },
  
};

pj.status = "healthy";
pj.name = rlSync.question(`\nIntroduzca nombre de personaje: `);
pj.learnSkill("Forging")
pj.learnSkill("Mining")
console.log(`\nSkill: ${pj.skills[pj.findSkill("Forging")].name}
             \nLevel: ${pj.skills[pj.findSkill("Forging")].level}
             \nExp: ${pj.skills[pj.findSkill("Forging")].exp}`)

pj.bodyTraining(pj.bodyTrainingChoice())


rlSync.question()

