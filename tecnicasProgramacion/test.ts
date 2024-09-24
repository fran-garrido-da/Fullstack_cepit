
import * as rlSync from "readline-sync"

//interface-----------------------------------------------------------------------------------------------------------------------
interface city {
  name: string,
  grade: number,
  relations: number,
  school: boolean,
}
interface region{
  name: string,
  domRace:string,
  school:boolean,
}
interface baseStats{
  con:number,
  str:number,
  dex:number,
  cha:number,
  inte:number,
  wis:number
}
interface skill{
  level:number,
  love:number,
  multiplier:number //represents comprehension level for a combat art or tool grade for the producing and gathering
}
interface person{
  name:string,
  age:number,
}
interface realm{
  accum:number,
  compression:number,
  modifier:number,
}
interface cultivation{
  realm1:realm,
}
//const---------------------------------------------------------------------------------------------------------------------------
const realmProto:realm={
  accum: 0,
  compression: 0,
  modifier: 0
}
const cultivationProto:cultivation = {
  realm1: {
    accum: 0,
    compression: 1,
    modifier: 1
  }
}
const personProto:person = {
  name: "",
  age: 0
}
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
const beastRaces:string[] = [
  "Tiger",//Bloodline of the White Tiger
  "Monkey", //Bloodline of Sun Wukong
  "Turtle", //Bloodline of the Black Tortoise
  "Bull", //Bloodline of the Golden Bull
  "Eagle" //Bloodline of the Skydancer Eagle
];
const monsterRaces:string[] =[
  "Jörmungandr", //Inheritor of Jörmungandr
  "Thunderbird", //Inheritor of Zeus
  "Dragon of Calamity", //Inheritor of the Dragon of Calamity
  "Fenrir", // Inheritor of Fenrir
  "Lich"//Lich
];
const RACES:string[] = [
  "Beast",
  "Monster",
  "Human Beast Hybrid",
  "Human Monster Hybrid",
  "Human",
  "Demigod",
  "God"
];
const encounters:string[]=[" Treasure room, you see weapon racks here and there, closed treasure chests and a lot artifacts"," Well preserved ruin, you don\'t know what lies inside"," Dilapidated ruin, you don\'t know what lies inside"," Practitioner","n Old man on the side of the road" ]
//let-----------------------------------------------------------------------------------------------------------------------------
let regionStart:region={
  name: REGIONS[Math.floor(Math.random()*(REGIONS.length))],
  domRace: RACES[Math.floor(Math.random()*(RACES.length-1))],
  school: true
}
let city:city ={
  name: CITIES[Math.floor(Math.random()*CITIES.length)],
  grade: Math.floor(Math.random()*GRADES.length),
  relations: 0,
  school: true
}
let stats:baseStats ={
  con: Math.round(Math.random()*19)+1,
  str: Math.round(Math.random()*19)+1,
  dex: Math.round(Math.random()*19)+1,
  cha: Math.round(Math.random()*19)+1,
  inte: Math.round(Math.random()*19)+1,
  wis: Math.round(Math.random()*19)+1
}
let knownCities:string[] = []
let knownRegions:string[] = []
let b:number = 0
let c:number = 0
//init------------------------------------------------------------------------------------------------------------------------------
console.clear()
let PLAYER = Object.create(personProto)
PLAYER.name = ""
PLAYER.age = Math.round(Math.random()*18)
PLAYER.talent = Math.round(Math.random()*100)
PLAYER.luck = Math.round(Math.random()*100)
if(PLAYER.age<18){  
  PLAYER.growthRate = Math.round(((Math.random()*100)/PLAYER.age)*PLAYER.talent)
}
PLAYER.region = regionStart
PLAYER.city = city
if (PLAYER.region.domRace == "Monster" || PLAYER.region.domRace == "Beast"){
  PLAYER.region.school = false
}
if(PLAYER.city.grade>5 ||PLAYER.region.school == false){
  PLAYER.city.school = false
}
PLAYER.race = RACES[Math.floor(Math.random()*(RACES.length-1))]
if(PLAYER.race=="Beast"|| PLAYER.race=="Human Beast Hybrid"){
  PLAYER.subrace = beastRaces[Math.floor(Math.random()*beastRaces.length)]
}else if (PLAYER.race=="Monster" || PLAYER.race=="Human Monster Hybrid"){
  PLAYER.subrace = monsterRaces[Math.floor(Math.random()*monsterRaces.length)]
}
PLAYER.stats = stats
switch(PLAYER.race){
    case RACES[0]://Beast
      PLAYER.stats.con = PLAYER.stats.con + 2
      PLAYER.stats.str = PLAYER.stats.str + 3 
      PLAYER.stats.inte = PLAYER.stats.inte - 3
      PLAYER.stats.wis = PLAYER.stats.wis - 2
      switch(PLAYER.subrace){
        case beastRaces[0]://tiger
          PLAYER.stats.str = PLAYER.stats.str + 2
          PLAYER.stats.cha = PLAYER.stats.cha + 1
        break;
        case beastRaces[1]://wolf
        PLAYER.stats.wis = PLAYER.stats.wis + 2
        PLAYER.stats.dex = PLAYER.stats.dex + 1
        break;
        case beastRaces[2]://turtle
        PLAYER.stats.con = PLAYER.stats.con + 2
        PLAYER.stats.wis = PLAYER.stats.wis + 1
        break;
        case beastRaces[3]://bull
        PLAYER.stats.str = PLAYER.stats.str + 1
        PLAYER.stats.con = PLAYER.stats.con + 2
        break;
        case beastRaces[4]://eagle
        PLAYER.stats.dex = PLAYER.stats.dex + 2
        PLAYER.stats.inte = PLAYER.stats.inte + 1
        break;
      }
      break;
    case RACES[1]://Monster
      PLAYER.stats.con = PLAYER.stats.con + 2
      PLAYER.stats.str = PLAYER.stats.str + 3
      PLAYER.stats.inte = PLAYER.stats.inte - 3
      PLAYER.stats.wis = PLAYER.stats.wis - 1
      switch(PLAYER.subrace){
        case monsterRaces[0]://serpent
        PLAYER.stats.con = PLAYER.stats.con + 3
        PLAYER.stats.str = PLAYER.stats.str + 2
        break;
        case monsterRaces[1]://thunderbird
        PLAYER.stats.dex = PLAYER.stats.dex + 3
        PLAYER.stats.str = PLAYER.stats.str + 2
        break;
        case monsterRaces[2]://dragon
        PLAYER.stats.con = PLAYER.stats.con + 2
        PLAYER.stats.str = PLAYER.stats.str + 3
        break;
        case monsterRaces[3]://lunarfang
        PLAYER.stats.str = PLAYER.stats.str + 3
        PLAYER.stats.wis = PLAYER.stats.wis + 2
        break;
        case monsterRaces[4]://Lich
        PLAYER.stats.wis = PLAYER.stats.wis + 2
        PLAYER.stats.int = PLAYER.stats.int + 3
        break;
      }
      break;
    case RACES[2]://Beast human
    PLAYER.stats.con = PLAYER.stats.con + 1
    PLAYER.stats.str = PLAYER.stats.str + 2 
    PLAYER.stats.inte = PLAYER.stats.inte - 1
      switch(PLAYER.subrace){
        case beastRaces[0]://tiger
          PLAYER.stats.str = PLAYER.stats.str + 3
          PLAYER.stats.cha = PLAYER.stats.cha + 1
        break;
        case beastRaces[1]://wolf
        PLAYER.stats.wis = PLAYER.stats.wis + 3
        PLAYER.stats.str = PLAYER.stats.str - 3
        PLAYER.stats.con = PLAYER.stats.con - 2
        PLAYER.stats.dex = PLAYER.stats.dex + 2
        break;
        case beastRaces[2]://turtle
        PLAYER.stats.str = PLAYER.stats.str -2
        PLAYER.stats.con = PLAYER.stats.con + 3
        PLAYER.stats.wis = PLAYER.stats.wis + 2
        PLAYER.stats.dex = PLAYER.stats.dex - 3
        break;
        case beastRaces[3]://bull
        PLAYER.stats.str = PLAYER.stats.str + 3
        PLAYER.stats.con = PLAYER.stats.con + 3
        PLAYER.stats.wis = PLAYER.stats.wis -3
        PLAYER.stats.inte = PLAYER.stats.inte - 3
        break;
        case beastRaces[4]://eagle
        PLAYER.stats.con = PLAYER.stats.con -3
        PLAYER.stats.str = PLAYER.stats.str -2
        PLAYER.stats.dex = PLAYER.stats.dex + 3
        PLAYER.stats.inte = PLAYER.stats.inte + 2
        break;
      }
      break;
    case RACES[3]://Monster human
      PLAYER.stats.con = PLAYER.stats.con + 2
      PLAYER.stats.str = PLAYER.stats.str + 3 
      PLAYER.stats.inte = PLAYER.stats.inte - 1
      switch(PLAYER.subrace){
        case monsterRaces[0]://serpent
        PLAYER.stats.con = PLAYER.stats.con + 3
        PLAYER.stats.str = PLAYER.stats.str + 2
        break;
        case monsterRaces[1]://thunderbird
        PLAYER.stats.dex = PLAYER.stats.dex + 3
        PLAYER.stats.str = PLAYER.stats.str + 2
        break;
        case monsterRaces[2]://dragon
        PLAYER.stats.con = PLAYER.stats.con + 2
        PLAYER.stats.str = PLAYER.stats.str + 3
        break;
        case monsterRaces[3]://lunarfang
        PLAYER.stats.str = PLAYER.stats.str + 3
        PLAYER.stats.wis = PLAYER.stats.wis + 2
        break;
        case monsterRaces[4]://Lich
        PLAYER.stats.wis = PLAYER.stats.wis + 2
        PLAYER.stats.int = PLAYER.stats.int + 3
        break;
      }
      break;
    case RACES[5]://Demigod
      PLAYER.stats.con = PLAYER.stats.con + 5
      PLAYER.stats.str = PLAYER.stats.str + 5 
      PLAYER.stats.inte = PLAYER.stats.inte + 5
      PLAYER.stats.wis = PLAYER.stats.wis + 5
      PLAYER.stats.dex = PLAYER.stats.dex + 5
      PLAYER.stats.cha = PLAYER.stats.cha + 5
      break;
}
PLAYER.status = "Healthy"

let input:any 

PLAYER.cultivation = Object.create(cultivationProto)
console.log(`\nCONGRATULATIONS! You are now a cultivator
             \nYour destiny is now solely in your hands`)
console.clear()
console.log(`\nYou open your eyes and find yourself with your thoughts empty
             \nNo recolection of your past, and no plans for your future`)
input = rlSync.question(`\nAll you know is that your name is: `)
PLAYER.name = input
console.clear()

while (input!=0){
  console.clear()
  console.log(`\nYou start to think, what should i be doing?`)
  console.log(`\n[1] = Investigate your surroundings for treasure`)
  if(b==0){
    console.log(`\n[2] = Find out where you are`)
  }else
  if(b!==0){
    console.log(`T\n[2] = Travel`)
  }
  console.log(`\n[3] = Inspect yourself`)
  console.log(`\n[4] = Do nothing`)
  input = rlSync.questionInt()
  switch(input){
    case 1:
      let rng:number=Math.round(Math.random()*50)
      if(PLAYER.luck<rng){
      console.log(`\nYou begin investigating your surroundings, looking for fortune`)
      console.log(`\nA day goes by, and you find nothing`)
        if(PLAYER.luck>=rng){
          console.log(`You find a${encounters[Math.floor(Math.random()*encounters.length)]}`)
        }
      }
      break;
    case 2:
      if (b=0){
        let rng:number=Math.round(Math.random()*20)
        console.log("You begin to look for clues as to where you are")
        if(PLAYER.luck<rng){
          console.log(`\nYou look for someone to inquire, but find no one`)
          console.log(`\nA day goes by`)
        }else if(PLAYER.luck>rng){
          console.log(`\nYou find a caravan, the caravan guards tells you about the region`)
          console.log(`\nThe region is called ${PLAYER.region}
                       \nThe nearest city is ${PLAYER.city.name}, a ${PLAYER.city.grade} grade city`)
          console.log(`\nA day goes by`)
          knownCities[0]=PLAYER.city.name
          b++
        }
      }else{
        if(knownCities.length!==CITIES.length){
          console.log(`[1]= You can follow an unknown road`)  
        } 
        console.log(`Or You can travel to these places`)
        for (let i:number = 0;i<knownCities.length;i++){
          console.log(`[${i+2}] = ${knownCities[i]}`)
        }
                
      }
        break;
    case 3:
      if (c<1){ 
        console.log("You begin inspecting yourself")
        console.log(`You are a ${PLAYER.race}`)
        c++
      }else if (c==1 && PLAYER.race!==("Demigod"||"Human"||"God")){
        console.log("You begin inspecting yourself")
        switch(PLAYER.race){
          case "Beast" || "Human Beast Hybrid":
            console.log(`\nMemories flood your mind, you are the descendant of the Great ${PLAYER.subrace}`)
            break;
          case "Monster" || "Human Monster Hybrid":
           console.log(`\nMemories flood your mind, you are the inheritor of the Great ${PLAYER.subrace}`) 
            break;
          default:console.log(`You look like a person`)
          }c++  
      }else {
        console.log("You begin inspecting yourself")
        console.log(`You are ${PLAYER.status}`)
      }
      break;
    case 4:
      console.log("You stay still for a while, not doing anything")
      break;
    default:input = rlSync.questionInt()
  }
}