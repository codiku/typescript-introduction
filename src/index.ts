abstract class Spell {
  protected _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  abstract cast(): void;
}

type SpellName<S extends Spell> = S extends FireSpell
  ? FireSpellName
  : S extends FrostSpell
  ? FrostSpellName
  : never;

enum FrostSpellName {
  FrostBolt = "Frost bolt",
  Blizzard = "Blizzard",
}
enum FireSpellName {
  FireBolt = "Fire bolt",
  FireWall = "Fire wall",
  BigBang = "Big Bang",
}

class FireSpell extends Spell {
  readonly burningDamage = 20;
  constructor(name: FireSpellName) {
    super(name);
  }

  cast() {
    console.log(
      this.name,
      " / Boom, your are burn the enemy, he took " +
        this.burningDamage +
        " damage"
    );
  }
}
class FrostSpell extends Spell {
  readonly slowingRate = 0.5;
  constructor(name: FrostSpellName) {
    super(name);
  }
  cast() {
    console.log(
      this.name,
      " : Brrr, your are freezing and slowed by " +
        this.slowingRate
    );
  }
}

class Wizard<S extends Spell> {
  private spellBook: S[];
  constructor(initialSpells: S[]) {
    this.spellBook = initialSpells;
  }
  castSpellFromBook(name: SpellName<S>) {
    const spell = this.spellBook.find(
      (s: S) => s.name === name
    );
    if (spell) {
      spell.cast();
    } else {
      throw new Error("You don't have this spell !");
    }
  }
  castAllAtOnce() {
    this.spellBook.forEach((spell: S) => {
      spell.cast();
    });
  }
}

const fireSpells: FireSpell[] = [
  new FireSpell(FireSpellName.FireBolt),
  new FireSpell(FireSpellName.FireWall),
];
const frostSpells: FrostSpell[] = [
  new FrostSpell(FrostSpellName.FrostBolt),
  new FrostSpell(FrostSpellName.Blizzard),
];

// Throw an error
//const noobFrostWizard = new Wizard<FireSpell>(frostSpells);
const fireWizard = new Wizard<FireSpell>(fireSpells);
const frostWizard = new Wizard<FrostSpell>(frostSpells);

fireWizard.castAllAtOnce();
try {
  fireWizard.castSpellFromBook(FireSpellName.BigBang);
} catch (err) {
  console.log("Error ! ", (err as Error).message);
}

frostWizard.castAllAtOnce();

frostWizard.castSpellFromBook(FrostSpellName.Blizzard);
