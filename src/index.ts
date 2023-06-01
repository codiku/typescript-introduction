class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  widthdraw(amount: number): void {
    if (this.balance - amount < 0) {
      throw new Error("Insufficient funds.");
    }
    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}
const account1 = new BankAccount(40000);

account1.deposit(10000);

console.log("balance", account1.getBalance());

account1.widthdraw(50000);

console.log("balance after widthdraw", account1.getBalance());

try {
  account1.widthdraw(1);
} catch (err: unknown) {
  console.log((err as Error).message);
}
