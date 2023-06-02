interface MovieInterface {
  title: string;
  year: number;
  isForAdult: boolean;
}

interface MovieInterface {
  director: string;
}
/*
interface Vehicule {
  maxSpeed: number;
  brand: string;
}
*/
type Vehicule = {
  maxSpeed: number;
  brand: string;
};

interface Car extends Vehicule {
  horsePower: number;
}

interface Boat extends Vehicule {
  sails: number;
}

type Bike = {
  pedals: number;
} & Vehicule;

let car: Car = {
  brand: "Mustang",
  horsePower: 300,
  maxSpeed: 250,
};
let boat: Boat = {
  brand: "Apex",
  sails: 3,
  maxSpeed: 250,
};

type MovieType = {
  title: string;
  year: number;
  isForAdult: boolean;
};

type MovieType = {
  director: string;
};

let m1: MovieInterface;

let m2: MovieType;

m1 = {
  isForAdult: true,
  title: "Fight club",
  year: 1999,
  director: "David Fincher",
};

m2 = {
  isForAdult: true,
  title: "Fight club",
  year: 1999,
};
