const persons: {
  name: string;
  job: string;
  age: number;
}[] = [
  { name: "Alice", job: "Font-end Dev", age: 28 },
  { name: "Bob", job: "Back-end dev", age: 44 },
  { name: "Codiku", job: "Full Stack dev", age: 30 },
];

console.log(
  persons.map((person) => `<li>${person.name}</li>`)
);

const formatedList: string[] = persons.map(
  (person: {
    name: string;
    job: string;
    age: number;
  }): string => {
    return `<li>Name : ${person.name} - Job : ${person.job}</li>`;
  }
);
const htmlList: string = `<ul> ${formatedList.join(
  ""
)} </ul>`;

document.getElementById("app")!.innerHTML = htmlList;
