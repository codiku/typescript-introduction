class User {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
}

class Admin extends User {
  set name(n: string) {
    this._name = n;
  }
}

const user = new User("Codiku");
// user.name = "azeazea";
const adminUser = new Admin("Robin");
adminUser.name = "Rob";
