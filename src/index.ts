interface Fish {
  swim: () => void;
}
interface Bird {
  fly: () => void;
  walk: () => void;
}

function getRandomPet(): Fish | Bird {
  if (Math.random() > 0.5) {
    return { swim: () => console.log("I swimmm") };
  } else {
    return {
      fly: () => console.log("I fly"),
      walk: () => console.log("I walk"),
    };
  }
}
function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet;
}
const pet = getRandomPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
  pet.walk();
}
