class WikiMonster {
  static knownMonsters : Monster[] = [];
  static logNames () {
    const names = WikiMonster.knownMonsters.map( (item) => item.name)
    names.sort().forEach( (name) => console.log(name))
  }

  static findMonster (name: string) : Monster | string {
    const monster = WikiMonster.knownMonsters.filter( (item) => item.name == name)
    if(monster.length == 1) {
      return monster[0]
    } else {
      return 'Monster not found'
    }
  }

  static logMonster (name: string) : void {
    const monster = WikiMonster.findMonster(name)
    if(typeof monster == 'string') {
      return;
    } else {
      monster.logMonster()
    }
  }

  static updateMonster<T extends object> (name: string, newMonster: T) {
    const temp = WikiMonster.knownMonsters.filter( (item) => item.name == name)
    if(!temp) {
      console.log('Monster not found');
      return;
    }
    let monster = temp[0]
    let validatedObj : any = {}
    for(const entry of Object.entries(newMonster)) {
      const [key, value] = entry
      if(Object.keys(monster).includes(key)) {
        validatedObj[key] = value;
      }
    }
    let index = WikiMonster.knownMonsters.indexOf(monster)
    monster = {...monster, ...validatedObj}
    WikiMonster.knownMonsters[index] = monster; 
  }
}

abstract class Monster {
  abstract name: string;
  abstract location: [string, string];
  abstract challenge: number;
  abstract weaknesses: string[]
  abstract undead: boolean
  abstract powers: string[]

  abstract logMonster (this: Monster) : void ;
  init() : void {
    WikiMonster.knownMonsters.push(this)
  }

  constructor() {
    this.init();
  }
}

enum Signs {
  FreezingTemps,
  GhostWriting,
  Finerprints,
  GhostOrb
}

class Ghost extends Monster {
  logMonster(this: Ghost): void {
    console.log(`Name: ${this.name} | Location: ${this.location.join(' ')}`)
    console.log(`Challenge: ${this.challenge} | Weakness: ${this.weaknesses.join(', ')}`)
    console.log(`Undead: ${(this.undead) ? 'Yes' : 'No'} | Powers: ${this.powers.join(', ')}`);
    const signsStr = this.signs.map( (sign) => Signs[sign])
    console.log(`Signs: ${(signsStr.length == 0) ? 'none' : signsStr.join(', ')} | Type: ${this.type}`);
  }
  public signs : Signs[];
  public type: string = 'unknown';

  constructor(
    public name: string,
    public location: [string, string],
    public challenge: number,
    public weaknesses: string[],
    public undead: boolean,
    public powers: string[]
  ) {
    super()
    if(challenge > 10 || challenge < 1) {
      challenge = 5;
    }
    this.signs = [];
  }

  public addSign(newSign : Signs) : void {
    this.signs.push(newSign)
  }

  public updateType(newType: string) : void {
    this.type = newType;
  }
}

class Beast extends Monster {
  logMonster(this: Beast): void {
    console.log(`Name: ${this.name} | Location: ${this.location.join(' ')}`)
    console.log(`Challenge: ${this.challenge} | Weakness: ${this.weaknesses.join(', ')}`)
    console.log(`Undead: ${(this.undead) ? 'Yes' : 'No'} | Powers: ${this.powers.join(', ')}`);
    console.log(`Habitat: ${this.habitat} | Defenses: ${(this.defenses.length == 0) ? 'none' : this.defenses.join(', ')}`);
  }
  public habitat : string;
  public defenses : string[];

  constructor(
    public name: string,
    public location: [string, string],
    public challenge: number,
    public weaknesses: string[],
    public powers: string[],
    public undead: boolean,
  ) {
    super()
    this.habitat = 'unknown'
    if(challenge > 10 || challenge < 1) {
      challenge = 5;
    }
    this.defenses = [];
  }

  public addDefenses (...newDefenses : string[]) : string[] {
    if(this.defenses.length == 0) {
      this.defenses = newDefenses
    } else {
      this.defenses = [...this.defenses, ...newDefenses]
    }
    return this.defenses
  }

  public setHabitat (newHabitat : string) : string {
    this.habitat = newHabitat;
    return this.habitat;
  }
}

enum Compliance {
  Hostile,
  Unfriendly,
  Neutral,
  Friendly,
  Ally
}

class Humanoid extends Monster {
  logMonster(this: Humanoid): void {
    console.log(`Name: ${this.name} | Location: ${this.location.join(' ')}`)
    console.log(`Challenge: ${this.challenge} | Weakness: ${this.weaknesses.join(', ')}`)
    console.log(`Undead: ${(this.undead) ? 'Yes' : 'No'} | Powers: ${this.powers.join(', ')}`);
    console.log(`Humanness: ${this.howHuman} | Compliance: ${Compliance[this.compliance]}`);
    
  }
  
  public get humanness () : number {
    return this.howHuman;
  }

  public set humanness (newVal : number) {
    if(newVal < 11 && newVal > 0) {
      this.howHuman = newVal;
    }
  }
  
  private howHuman: number = 5;

  constructor(
    public name: string,
    public location: [string, string],
    public challenge: number,
    public weaknesses: string[],
    public undead: boolean,
    public powers: string[],
    public compliance: Compliance
  ) {
    super();
    if(challenge > 10 || challenge < 1) {
      challenge = 5;
    }
  }

  public updateCompliance (newVal: Compliance) {
    this.compliance = newVal;
  }
}

//! Ghosts
const casper = new Ghost('Casper the Friendly Ghost', ['somewhere', 'scary'], 2, ['adults'], true, ['invisibility'])
casper.addSign(Signs.FreezingTemps)
casper.updateType('Spirit')

const flying = new Ghost('The Flying Dutchman', ['bikini', 'bottom'], 7, ['idiots', 'patrick'], true, ['invisibility', 'intangibility', 'flight'])
flying.addSign(Signs.FreezingTemps)
flying.updateType('Phantom')

const danny = new Ghost('Danny Phantom', ['somewhere', 'else'], 5, ['water'], false, ['possession', 'flight'])
danny.addSign(Signs.GhostWriting)
danny.updateType('Phantom')

//! Beasts
const wolf = new Beast('Wolf', ['somewhere', 'else'], 6, ['steel'], ['powerful bite'], false )
wolf.addDefenses('teeth', 'claws', 'fur')
wolf.setHabitat('woods')

const griffin = new Beast('Griffin', ['in the', 'air'], 8, ['fire', 'arrows'], ['flight'], false)
griffin.addDefenses('talons', 'wings')
griffin.setHabitat('nest')

const rat = new Beast('Rat', ['kitchen', 'elsewhere'], 1, ['feet','cheese'], ['small', 'fast'], false)
rat.addDefenses('little teeth')
rat.setHabitat('mousehole')

//! Humanoids
const kevin = new Humanoid('Kevin', ['right', 'here'], 5, ['guns', 'knives'], false, ['nothing special'], Compliance.Friendly)
kevin.humanness = 9;

const zombie = new Humanoid('Zombie', ['somewhere', 'interesting'], 7, ['fire'], true, ['numerous'], Compliance.Hostile)
zombie.humanness = 7;

const doppler = new Humanoid('Doppler', ['i', 'dont know'], 6, ['silver'], false, ['transformation'], Compliance.Neutral)
doppler.humanness = 10;

WikiMonster.logNames()