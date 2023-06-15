type ProgrammingLanguage =
  | "Typescript"
  | "Java"
  | "C++"
  | "Python";

class Developer {
  private name: string;
  private language: ProgrammingLanguage;

  constructor(name: string, language: ProgrammingLanguage) {
    this.name = name;
    this.language = language;
  }
  getInfo() {
    console.log(
      `${this.name} is coding using ${this.language}`
    );
  }
  @methodLogger
  getName() {
    return this.name;
  }
  @methodLogger
  getSomeVacations(days: number, location: string): number {
    console.log(`Going ${days} days to ${location}`);
    return days;
  }
}
const codiku = new Developer("Codiku", "Typescript");
codiku.getSomeVacations(15, "Miami");
codiku.getName();

function methodLogger(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const method = descriptor.value;
  descriptor.value = (...args: any[]) => {
    const result = method.apply(this, args);
    console.log(
      "Function ",
      methodName,
      " called with args : ",
      args,
      ". The result is : ",
      result
    );
  };
  return;
}
