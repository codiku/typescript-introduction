class BankAccount {
  private id: number;
  private balance: number;
  private minimumBalance: number;
  private favorites: BankAccount[];
  private interestRate: number;
  private interestCeiling: number;

  constructor(
    id: number,
    initialBalance: number,
    interestRate: number,
    interestCeiling: number,
    minimumBalance: number = 0
  ) {
    this.id = id;
    this.balance = initialBalance;
    this.minimumBalance = minimumBalance;
    this.favorites = [];
    this.interestRate = interestRate;
    this.interestCeiling = interestCeiling;
  }

  getId(): number {
    return this.id;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  widthdraw(amount: number): void {
    if (this.balance - amount < this.minimumBalance) {
      throw new Error("Insufficient funds.");
    }

    this.balance -= amount;
  }

  transferMoney(
    amount: number,
    toAccount: BankAccount
  ): void {
    if (this.balance - amount < 0) {
      throw new Error("Insufficient funds.");
    }

    if (this.getFavoriteAccountIndex(toAccount.id) == -1) {
      throw new Error("Account not in favorites list.");
    }

    this.balance -= amount;
    toAccount.deposit(amount);
  }

  addFavoriteAccount(account: BankAccount): void {
    this.favorites.push(account);
  }

  removeAccountById(id: number): void {
    const index = this.getFavoriteAccountIndex(id);
    if (index === -1) {
      throw new Error("Account not found in favorites list.");
    }

    this.favorites.splice(index, 1);
  }

  getFavoriteAccounts(): BankAccount[] {
    return this.favorites;
  }

  private getFavoriteAccountIndex(id: number): number {
    this.favorites.map((a) => a);

    return this.favorites.findIndex(
      (account) => account.id === id
    );
  }

  getMensualInterest(): number {
    if (this.balance > this.interestCeiling) {
      return this.interestCeiling * this.interestRate;
    } else {
      return this.balance * this.interestRate;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

// Story

const account1 = new BankAccount(1, 40000, 0.01, 50000);

const account2 = new BankAccount(2, 100000, 0.01, 50000);

account1.addFavoriteAccount(account2);

account1.transferMoney(
  20000,
  account1.getFavoriteAccounts()[0]
);

try {
  account1.widthdraw(25000);
} catch (e) {
  console.log(
    "The fund were unsufficient, widthdraw aborted"
  );
}
console.log(account1.getMensualInterest());

console.log(account1.getBalance());

account1.removeAccountById(2);

console.log(
  "Size of fav list ",
  account1.getFavoriteAccounts().length
);
