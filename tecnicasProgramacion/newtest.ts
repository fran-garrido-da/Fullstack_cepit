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
const WEAPONS:string[]=[
  "Swords",
  "Sabres",
  "Maces",
  "Spears",
  "Knives",
  "Bows",
  "Thrown weapons",
  "Greatweapons",
  "Exotic weapons",
]
const WEAPONSAVAILABLE:string[]=[
]
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
const CITIES: Array<string> = [
  "Xian Long",
  "Yangsu",
  "Xugong",
  "Kangpo",
  "Danying",
  "Xiangtong",
  "Fengjing",
  "Yanghung",
  "Dongsong",
  "Xianhai",
];
const REGIONS: Array<string> = [
  "Heavenly Dragon Empire",
  "Heaven-earth Immortal Kingdom",
  "Country of Yan",
  "White Tiger Plains",
  "Wildlands",
  "Calamity Mountain Peaks",
  "Disaster Wasteland",
];
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
  unarmed:{
    fist:{
      comprehension:0,
      practice:0
    },
    palm:{
      comprehension:0,
      practice:0
    },
    kick:{
      comprehension:0,
      practice:0
    },

  },
  physicalStats:{},
  activeCity:{},
  activeRegion:{},
  cities:[],

  setRace() {
    this.race = RACES[Math.floor(Math.random() * (RACES.length - 1))];
  },
  setSubrace() {
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
  initCity(){
    for (let i=0;i<CITIES.length;i++){
      pj.cities[i]={
        name:CITIES[i],
        grade:GRADES[i],
        relations:0,
        school:true
      }
      if(pj.activeRegion.domRace===RACES[0]||pj.activeRegion.domRace===RACES[0]&&pj.cities[i].grade>5){
        pj.cities[i].school = false
      }

    }
  },  
  travelSelection(){
    console.log(`Select city to travel to: `)
    let range = pj.cities.length
    for (let i=0;i<range;i++){
      console.log(`[${i}] = Travel to ${pj.cities[i].name}`)
    }
    let input = rlSync.questionInt()
    return input
  },
  selectCity(input:number){
    pj.activeCity=pj.cities[input]
  },
  newRegion(){
    let newregion = REGIONS[Math.floor(Math.random()*REGIONS.length)]

    pj.activeRegion = {
      name: newregion,
      domRace:RACES[Math.floor(Math.random())*RACES.length] 
    }
  },
  findRegion(name:string):number{
    let range= pj.regions.length
    let result:number = -1 
    for (let i = 0;i<range;i++){
       if (pj.regions[i].name===name){
         result = i
       }
     }
     return result
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
    this.realm.subrealm.accum += this.cultivExp;
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
        \n [1]:BODY = train your strength and reflexes for a year.
        \n [2]:TECHNIQUES = Practice and understand your techniques.
        \n [3]:WEAPONS = Train with your weapon of choice
        \n [4]:UNARMED FIGHTING = Train your most trusted fists, kicks or palms`);
    
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
      default:
    }
  },
  techniqueTrainingChoice(){

  },
  weaponTrainingChoice():number{
    console.log(`\nChoose what to train with: `)
    let range = WEAPONSAVAILABLE.length
    if (range<1){
      console.log(`\nYou have no weapons to train with`)
    }
    for (let i=0;i<range;i++){
      console.log(`\n[${i+1}]: ${WEAPONSAVAILABLE[i]}`)
    }
    console.log(`\nKeep in mind, that you have to own the type of weapon to train with
                 \nor be in a training institution that has them.`);
    let input:number = rlSync.questionInt()
    return input
  },
  weaponTraining(input:number){
    for (let i = 0;i<WEAPONSAVAILABLE.length;i++){
      if (i === (input-1)){
        pj.weaponSelect(input)
      }
    }
  },
  weaponSelect(input:number){
    if(pj.findSkill(WEAPONSAVAILABLE[input-1])===-1){
      pj.learnSkill(WEAPONSAVAILABLE[input-1])
    }else if (pj.getSkillExp(WEAPONSAVAILABLE[input-1])<100){
      pj.skills[pj.findSkill(WEAPONSAVAILABLE[input-1])].exp++
      console.log(`Gained experience in ${WEAPONSAVAILABLE[input-1]}`)
    }else if(pj.getSkillLevel(WEAPONSAVAILABLE[input-1])<10){
      pj.skills[pj.findSkill(WEAPONSAVAILABLE[input-1])].level++
      console.log(`Gained new level in ${WEAPONSAVAILABLE[input-1]}`)
    }
  },
  unarmedTraining(input){
    switch(input){
      case 1:
        if (pj.getFist().practice<100){
          pj.getFist().practice++
          console.log(`Gained experience in fighting with your fists`)
        }else if(pj.getFist().comprehension<100){
          pj.getFist().comprehension++
          console.log(`Gained new level of comprehension in your fists`)}
        break;
      case 2:
        if (pj.getPalm().practice<100){
          pj.getPalm().practice++
          console.log(`Gained experience in fighting with your palms`)
        }else if(pj.getPalm().comprehension<100){
          pj.getPalm().comprehension++
          console.log(`Gained new level of comprehension in your palms`)}
        break;
      case 3:
        if (pj.getKick().practice<100){
          pj.getKick().practice++
          console.log(`Gained experience in fighting with your kicks`)
        }else if(pj.getKick().comprehension<100){
          pj.getKick().comprehension++
          console.log(`Gained new level of comprehension in your kicks`)}
        break;
      default:
    }
  },
  unarmedTrainingChoice(){
    console.log(`\n[1] = Train your fists
                 \n[2] = Train your palms
                 \n[3] = Train your kicks`)
    let input:number = rlSync.questionInt()  
    return input
  },
  getFist(){
    return pj.unarmed.fist
  },
  getPalm(){
    return pj.unarmed.palm
  },
  getKick(){
    return pj.return.kick
  },
  getSkillbyName(name:string){
   return pj.skills[pj.findSkill(name)]
  },
  getTechniquebyName(name:string){
    return pj.techniques[pj.findTechnique(name)]
  },
  getBlood(){
    return this.physique.blood
  },
  getBones(){
    return this.physique.bones
  },
  getMuscles(){
    return this.physique.muscle
  },
  getTendons(){
    return this.physique.tendons
  },
  getMeridians(){
    return this.physique.meridians
  },
  getOrgans(){
    return this.physique.organs
  },
  getStamina(){
    return this.physicalStats.stamina
  },
  getStrength(){
    return this.physicalStats.strength
  },
  getAgility(){
    return this.physicalStats.agility
  },
  getStatus(){
    return pj.status
  }
};

pj.status = "healthy";
pj.name = rlSync.question(`\nIntroduzca nombre de personaje: `);
pj.selectRace();
pj.selectSubrace();
pj.newRegion();
pj.initCity()


//pj.bodyTraining(pj.bodyTrainingChoice())
//pj.weaponTraining(pj.weaponTrainingChoice())
console.log(pj)
rlSync.question()

