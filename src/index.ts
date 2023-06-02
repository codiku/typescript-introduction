// Unions

let value: number | boolean | string;

value = "Hi";

interface Square {
  kind: "square";
  size: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

let myShape: Square | Circle;

myShape = {
  kind: "square",
  size: 10,
};

function displayShape(shape: Square | Circle): void {
  console.log("Kind ", shape.kind);
  if (shape.kind === "circle") {
    console.log("Radius ", shape.radius);
  } else {
    console.log("Size ", shape.size);
  }
}

displayShape(myShape);

let data: (number | string | boolean | (Square | Circle))[] =
  [1, "Hi", true, myShape];

if (typeof data[0] === "number") {
  console.log("Indeed first element is a number !");
}
