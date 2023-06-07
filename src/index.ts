interface Hero {
  name: string;
  superPower: string;
}

const h1: Hero = {
  name: "The flash",
  superPower: "Run super fast",
};

const h2: Hero = {
  name: "The Hulk",
  superPower: "Super strong",
};

const h3: Hero = {
  name: "Batman",
  superPower: "Is rich",
};

const h4: Hero = {
  name: "Superman",
  superPower: "Basically a God",
};

const heroes = [h1, h2, h3, h4];

class List<X> {
  private _array: X[] = [];

  constructor(_array: X[]) {
    this._array = _array;
  }

  get values() {
    return this._array;
  }

  shuffle(): X[] {
    return this._array.sort(() => Math.random() - 0.5);
  }
  push(newElement: X): X[] {
    this._array.push(newElement);
    return this._array;
  }
  removeLast(): X[] {
    this._array.splice(0, this._array.length - 1);
    return this._array;
  }
}

const heroList = new List<Hero>(heroes);

heroList.shuffle();

console.log(heroList);
