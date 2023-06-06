interface Vehicule {
  maxSpeed: number;
  brand: string;
}

type Car = {
  horsePower: number;
} & Vehicule;

type Boat = {
  sails: number;
} & Vehicule;

let car: Car;
let boat: Boat;
