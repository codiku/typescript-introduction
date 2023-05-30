var persons = [
    { name: "Alice", job: "Font-end Dev", age: 28 },
    { name: "Bob", job: "Back-end dev", age: 44 },
    { name: "Codiku", job: "Full Stack dev", age: 30 },
];
console.log(persons.map(function (person) { return "<li>".concat(person.name, "</li>"); }));
var formatedList = persons.map(function (person) {
    return "<li>Name : ".concat(person.name, " - Job : ").concat(person.job, "</li>");
});
var htmlList = "<ul> ".concat(formatedList.join(""), " </ul>");
document.getElementById("app").innerHTML = htmlList;
