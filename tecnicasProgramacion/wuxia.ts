import * as rlSync from "readline-sync";
interface character {
  name: string;
  hp: number;
  age: number;
  level: number;
  region: string;
  city: string;
  race: string;
  subrace: string;
  karma: number;
  talent: number;
  intelligence: number;
  qi: number;
  lifespan: number;
}
//stats ---------------------------------------
const REALMS = {
  mortal: {
    qiGathering: {
      description:
        "Gather qi in the dantian, replenishing and augmenting the body's energy capacity. Its the fist stage of cultivation.",
      difficulty: 1,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    bloodConcentration: {
      description: "Concentrate and purify the blood via qi pressure.",
      difficulty: 1.5,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    boneForging: {
      description:
        "Pressure the bones with qi and force to forge new and stronger bones.",
      difficulty: 2.5,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    tendonRefining: {
      description:
        "Pull and push with qi, strengthening the tendons and nerves.",
      difficulty: 3,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    muscleTempering: {
      description:
        "Temper the muscles, forcing them to the limits with qi and force.",
      difficulty: 2,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    organReinforcing: {
      description:
        "Pressure and push the internal organs to de limits with qi and force.",
      difficulty: 5,
      tier: {
        transcendent: 5,
      },
    },
    skinHardening:{
      description:
      "Pressure and push the skin to de limits with qi and force.",
    difficulty: 5,
    tier: {
      transcendent: 5,
    },
    }
  },
  qi: {
    mortalForming: {
      description:
        "Form the vessel with qi. Replace the body with a new vessel made for qi",
      difficulty: 5,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    mortalRefining: {
      description:
        "Refine de vessel with qi and force. Put pressure to the limit to purify and strengthen the vessel",
      difficulty: 5,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    mortalTempering: {
      description:
        "Gather and compress qi into de vessel. The more compressed, the harder it is to keep compressing, but you will become stronger",
      difficulty: 5,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    earthAssimilation: {
      description:
        "Understand your vessel. Comprehend the limits of your strength and how to best use it",
      difficulty: 10,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    heavenIntegration: {
      description:
        "Purify the qi in the vessel. As you purify it, you can keep filling in, compressing and purifying more qi. The more you do, the harder it gets",
      difficulty: 10,
      tier: {
        low: 2,
        middle: 3,
        high: 4,
        transcendent: 5,
      },
    },
    chaosEtching: {
      description:
        "Etch secret runes on the body. Depending on part of the body for etchin, is de dificulty",
      difficulty: {
        skin: 5,
        bones: 10,
        muscles: 15,
        organs: 20,
        allBody: 25,
      },
      tier: {
        transcendent: 5,
      },
    },
  },
};
var SKILLS = {
  will: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  herbalism: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  mining: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  alchemy: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  forging: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  attack: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  defense: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  evasion: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  technique: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  stealth: {
    level: 1,
    exp: 0,
    love: Math.floor(Math.random() * 100) + 1,
    comprehension: 1
  },
  combatSword: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatMace: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatSabre: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatSpear: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatKnife: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatBow: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatThrow: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatGreat: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatExotic: {
    level: 1,
    exp: 0,
    comprehension: Math.floor(Math.random() * 11),
    love: Math.floor(Math.random() * 100) + 1,
  },
  combatUnarmed: {
    palm: {
      level: 1,
      exp: 0,
      comprehension: Math.floor(Math.random() * 11),
      love: Math.floor(Math.random() * 100) + 1,
    },
    fist: {
      level: 1,
      exp: 0,
      comprehension: Math.floor(Math.random() * 11),
      love: Math.floor(Math.random() * 100) + 1,
    },
    kick: {
      level: 1,
      exp: 0,
      comprehension: Math.floor(Math.random() * 11),
      love: Math.floor(Math.random() * 100) + 1,
    },
  },
};
const ROOTS = {
  fire: Math.floor(Math.random() * 101),
  water: Math.floor(Math.random() * 101),
  earth: Math.floor(Math.random() * 101),
  metal: Math.floor(Math.random() * 101),
  wood: Math.floor(Math.random() * 101),
  wind: Math.floor(Math.random() * 101),
  lightning: Math.floor(Math.random() * 101),
  yang: Math.floor(Math.random() * 101),
  yin: Math.floor(Math.random() * 101),
};
const RACES = {
  beast: {
    name: "Beast",
    subrace: {
      tiger: "Tiger",
      wolf: "Wolf",
      turtle: "Turtle",
      bull: "Bull",
      eagle: "Eagle",
    },
  },
  monster: {
    name: "Monster",
    subrace: {
      emberscale: "Emberscale",
      skydancer: "Skydancer Roc",
      salamander: "Salamander",
      lunarfang: "Lunarfang",
      marrowshade: "Marrowshade ",
    },
  },
  humbeast: {
    name: "Human Beast Hybrid",
    subraces: {
      tiger: "Tiger",
      wolf: "Wolf",
      turtle: "Turtle",
      bull: "Bull",
      eagle: "Eagle",
    },
  },
  humonster: {
    name: "Human Monster Hybrid",
    subrace: {
      emberscale: "Emberscale",
      skydancer: "Skydancer Roc",
      salamander: "Salamander",
      lunarfang: "Lunarfang",
      marrowshade: "Marrowshade ",
    },
  },
  human: {
    name: "Human",
  },
  demigod: {
    name: "Demigod",
  },
  god: {
    name: "God",
  },
};
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
const REGIONS = {
  region1: {
    name: "Heavenly Dragon Empire",
    domRace: "Demigod",
    school: "yes",
  },
  region2: {
    name: "Heaven-earth Immortal Kingdom",
    domRace: "Human",
    school: "yes",
  },
  region3: {
    name: "Country of Yan",
    domRace: "Human",
    school: "yes",
  },
  region4: {
    name: "White Tiger Plains",
    domRace: "Human Beasts Hybrid",
    school: "yes",
  },
  region5: {
    name: "Wildlands",
    domRace: "Beasts",
    school: "no",
  },
  region6: {
    name: "Calamity Mountain Peaks",
    domRace: "Human Monster Hybrid",
    school: "no",
  },
  region7: {
    name: "Disaster Wasteland",
    domRace: "Monster",
    school: "no",
  },
};
const CITIES = {
  basePower: 100,
  city0: {
    name: "Xian Long",
    grade: GRADES[0],
    relations: 0,
    school: true,
  },
  city1: {
    name: "Yangsu",
    grade: GRADES[1],
    relations: 0,
    school: true,
  },
  city2: {
    name: "Xugong",
    grade: GRADES[2],
    relations: 0,
    school: true,
  },
  city3: {
    name: "Kangpo",
    grade: GRADES[3],
    relations: 0,
    school: true,
  },
  city4: {
    name: "Danying",
    grade: GRADES[4],
    relations: 0,
    school: true,
  },
  city5: {
    name: "Xiangtong",
    grade: GRADES[5],
    relations: 0,
    school: false,
  },
  city6: {
    name: "Fengjing",
    grade: GRADES[6],
    relations: 0,
    school: false,
  },
  city7: {
    name: "Yanghung",
    grade: GRADES[7],
    relations: 0,
    school: false,
  },
  city8: {
    name: "Dongsong",
    grade: GRADES[8],
    relations: 0,
    school: false,
  },
  city9: {
    name: "Xianhai",
    grade: GRADES[9],
    relations: 0,
    school: false,
  },
};
const RACESELECT: Array<string> = [
  RACES.beast.name,
  RACES.monster.name,
  RACES.humbeast.name,
  RACES.humonster.name,
  RACES.human.name,
  RACES.demigod.name,
];
const SUBRACESELECT: Array<string> = [
  RACES.beast.subrace.bull,
  RACES.beast.subrace.tiger,
  RACES.beast.subrace.eagle,
  RACES.beast.subrace.turtle,
  RACES.beast.subrace.wolf,
  RACES.monster.subrace.emberscale,
  RACES.monster.subrace.lunarfang,
  RACES.monster.subrace.marrowshade,
  RACES.monster.subrace.salamander,
  RACES.monster.subrace.skydancer,
];
const CITYSELECT: Array<string> = [
  CITIES.city0.name,
  CITIES.city1.name,
  CITIES.city2.name,
  CITIES.city3.name,
  CITIES.city4.name,
  CITIES.city5.name,
  CITIES.city6.name,
  CITIES.city7.name,
  CITIES.city8.name,
  CITIES.city9.name,
];
const REGIONSELECT: Array<string> = [
  REGIONS.region1.name,
  REGIONS.region2.name,
  REGIONS.region3.name,
  REGIONS.region4.name,
  REGIONS.region5.name,
  REGIONS.region6.name,
  REGIONS.region7.name,
];
const RELATIONS = {
  relations: {
    family: {
      parents: {
        love: Math.floor(Math.random() * 101),
        discipline: Math.floor(Math.random() * 101),
        moral: Math.floor(Math.random() * 101),
      },
      siblings: {
        love: Math.floor(Math.random() * 101),
        moral: Math.floor(Math.random() * 101),
        companionship: Math.floor(Math.random() * 101),
      },
      wealth: Math.floor(Math.random() * 101),
      politics: {
        city: Math.floor(Math.random() * 101),
        region: Math.floor(Math.random() * 101),
        power: Math.floor(Math.random() * 101),
      },
    },
    friends: {},
  },
};
var PLAYER: character = {
  name: "",
  age: Math.floor(Math.random() * 15),
  level: 0,
  hp: 100,
  region: REGIONSELECT[Math.floor(Math.random() * 7)],
  city: CITYSELECT[Math.floor(Math.random() * 11)],
  race: RACESELECT[Math.round(Math.random() * 5)],
  subrace: "",
  karma: Math.floor(Math.random() * 11),
  talent: Math.floor(Math.random() * 501),
  intelligence: Math.floor(Math.random() * 6),
  qi: 0,
  lifespan: 100,
};
//functions-------------------------------------
function logIntensity() {
  console.log(`\nChoose intensity
    \nWARNING! At low body levels, may cause harm
    \n[1]: Low intensity
    \n[2]: Medium intensity
    \n[3]: High intensity
    \n[4]: Extreme intensity`);
  input = rlSync.questionInt();
}
function rootCut(ROOTS: {
  fire: number;
  water: number;
  earth: number;
  metal: number;
  wood: number;
  wind: number;
  lightning: number;
  yang: number;
  yin: number;
}) {
  if (ROOTS.earth < 50) {
    ROOTS.earth = 0;
  }
  if (ROOTS.wood < 50) {
    ROOTS.wood = 0;
  }
  if (ROOTS.fire < 50) {
    ROOTS.fire = 0;
  }
  if (ROOTS.water < 50) {
    ROOTS.water = 0;
  }
  if (ROOTS.lightning < 50) {
    ROOTS.lightning = 0;
  }
  if (ROOTS.metal < 50) {
    ROOTS.metal = 0;
  }
  if (ROOTS.yang < 50) {
    ROOTS.yang = 0;
  }
  if (ROOTS.yin < 50) {
    ROOTS.yin = 0;
  }
  if (ROOTS.wind < 50) {
    ROOTS.wind = 0;
  }
}
function levelUp(level: number, exp: number) {
  if (exp > ((100 * 1.15) ^ (level - 1))) level++;
}
function intnstyTrain(
  PLAYER :{hp: number},
  input: number,
  skill: { exp: number; level: number; love: number, comprehension: number | 1},
  SKILLS:{will: {level:number}}
) {
  switch (input) {
    case 1:
      skill.exp =
        skill.exp + (10 / (1.5 / skill.comprehension) ** (skill.level - 1)) * (skill.love / 10);
      break;
    case 2:
      skill.exp =
        skill.exp + 12.5 * (1 / 1.25 / skill.comprehension) ** (skill.level - 1) * (skill.love / 10);
      break;
    case 3:
      if (SKILLS.will.level < 10) {
        PLAYER.hp = PLAYER.hp - (PLAYER.hp / SKILLS.will.level) * 5;
      }
      skill.exp =
        skill.exp + 15 *(1 / 1.15 / skill.comprehension) ** (skill.level - 1) *(skill.love / 10);
      break;
    case 4 :
      if (SKILLS.will.level < 25) {
        PLAYER.hp =- (PLAYER.hp / SKILLS.will.level) * 2;
      }
      skill.exp = skill.exp + 20 * (1 / 1.1 / skill.comprehension) ** (skill.level - 1) * (skill.love / 10);
      break;
    default:
      input = rlSync.questionInt();
  }
}
function trainChoice() {
  console.log(`\n How would you like to train?
               \n [1]BODY = train your strength and reflexes for a year.
               \n [2]TECHNIQUES = Practice your techniques and strategies for a year.
               \n [3]TENACITY = Train your will and resilience.`);
  if (PLAYER.race != RACES.beast.name || PLAYER.race != RACES.monster.name) {
    console.log(`\n [4]WEAPONS = Train with your weapon of choice`);
  }
  input = rlSync.questionInt();
  switch (input) {
    case 1:
      logIntensity();
      intnstyTrain(PLAYER, input, SKILLS.attack, SKILLS);
      intnstyTrain(PLAYER, input, SKILLS.defense, SKILLS);
      intnstyTrain(PLAYER, input, SKILLS.evasion, SKILLS);
      break;
    case 2:
      console.log(`\nChoose intensity
        \n[1]: Low intensity
        \n[2]: High intensity`);
      input = rlSync.questionInt();
      switch (input) {
        case 1:
          intnstyTrain(PLAYER, input, SKILLS.technique, SKILLS);
          intnstyTrain(PLAYER, input, SKILLS.stealth, SKILLS);
          break;
        case 2:
          intnstyTrain(PLAYER, input, SKILLS.technique, SKILLS);
          intnstyTrain(PLAYER, input, SKILLS.stealth, SKILLS);
          break;
        default:
          input = rlSync.questionInt();
      }
      break;
    case 3:
      logIntensity();
      intnstyTrain(PLAYER, input, SKILLS.will, SKILLS);
      break;
    case 4:
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
                   \nor be in a training institution`);
      input = rlSync.questionInt();
      switch (input) {
        case 1:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatSword,
            SKILLS
          );
          break;
        case 2:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatSabre,
            SKILLS
          );
          break;
        case 3:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatMace,
            SKILLS
          );
          break;
        case 4:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatSpear,
            SKILLS
          );
          break;
        case 5:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatKnife,
            SKILLS
          );
          break;
        case 6:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatBow,
            SKILLS
          );
          break;
        case 7:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatThrow,
            SKILLS
          );
          break;
        case 8:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatGreat,
            SKILLS
          );
          break;
        case 9:
          logIntensity();
          intnstyTrain(
            PLAYER,
            input,
            SKILLS.combatExotic,
            SKILLS
          );
          break;
        default:
          input = rlSync.questionInt();
      }
      break;
    default:
      input = rlSync.questionInt();
  }
}
//---------------------------------------------

var input: any;

console.clear();

console.log("********** WELCOME TO THE WORLD OF CULTIVATION **********");
console.log("                  Write name to start                    ");

input = rlSync.question();

PLAYER.name = input;

console.log("\n Write exit to exit");
console.log("\n -----------------------");
console.log(`\nYou are ${PLAYER.name}`);

switch (PLAYER.race) {
  case RACES.beast.name:
    PLAYER.subrace = SUBRACESELECT[Math.round(Math.random() * 4)];
    console.log(`\nYou are a ${PLAYER.race}, a ${PLAYER.subrace} beast`);
    break;
  case RACES.humbeast.name:
    PLAYER.subrace = SUBRACESELECT[Math.floor(Math.random() * 4)];
    console.log(
      `\nYou are a ${PLAYER.race}, a human-${PLAYER.subrace} hybrid `
    );
    break;
  case RACES.monster.name:
    PLAYER.subrace = SUBRACESELECT[Math.floor(Math.random() * 4 + 5)];
    console.log(`\nYou are a ${PLAYER.race}, a ${PLAYER.subrace}`);
    break;
  case RACES.humonster.name:
    PLAYER.subrace = SUBRACESELECT[Math.floor(Math.random() * 4 + 5)];
    console.log(`\nYou are a ${PLAYER.race}, a human-${PLAYER.subrace} hybrid`);
    break;
  default:
    console.log(`\nYou are a ${PLAYER.race}`);
}
/*
\n ALCHEMY = Practice in refining medicines and pills.
\n FORGING = Practice forging weapons, artifacts and armor.
\n HERB = Gather herbs and natural elixirs (chance of fights and encounters).
\n MINE = Mine for ores and natural treasures (chance of fight and encounters).
\n FIGHT = Go outside and fight for treasures*/

while (input != 0) {
  if (PLAYER.hp <= 0) {
    console.log("Manco");
    break;
  }
  if (input == 1) {
    trainChoice();
  }

  console.log(`\nWhat would you like to do?
    \n[1]Training = Decide type of training`);

  input = rlSync.questionInt();
  console.log(SKILLS);
  console.log(PLAYER.hp);
}
