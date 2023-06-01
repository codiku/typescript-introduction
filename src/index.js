var BankAccount = /** @class */ (function () {
    function BankAccount(id, initialBalance, interestRate, interestCeiling, minimumBalance) {
        if (minimumBalance === void 0) { minimumBalance = 0; }
        this.id = id;
        this.balance = initialBalance;
        this.minimumBalance = minimumBalance;
        this.favorites = [];
        this.interestRate = interestRate;
        this.interestCeiling = interestCeiling;
    }
    BankAccount.prototype.getId = function () {
        return this.id;
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.widthdraw = function (amount) {
        if (this.balance - amount < this.minimumBalance) {
            throw new Error("Insufficient funds.");
        }
        this.balance -= amount;
    };
    BankAccount.prototype.transferMoney = function (amount, toAccount) {
        if (this.balance - amount < 0) {
            throw new Error("Insufficient funds.");
        }
        if (this.getFavoriteAccountIndex(toAccount.id) == -1) {
            throw new Error("Account not in favorites list.");
        }
        this.balance -= amount;
        toAccount.deposit(amount);
    };
    BankAccount.prototype.addFavoriteAccount = function (account) {
        this.favorites.push(account);
    };
    BankAccount.prototype.removeAccountById = function (id) {
        var index = this.getFavoriteAccountIndex(id);
        if (index === -1) {
            throw new Error("Account not found in favorites list.");
        }
        this.favorites.splice(index, 1);
    };
    BankAccount.prototype.getFavoriteAccounts = function () {
        return this.favorites;
    };
    BankAccount.prototype.getFavoriteAccountIndex = function (id) {
        this.favorites.map(function (a) { return a; });
        return this.favorites.findIndex(function (account) { return account.id === id; });
    };
    BankAccount.prototype.getMensualInterest = function () {
        if (this.balance > this.interestCeiling) {
            return this.interestCeiling * this.interestRate;
        }
        else {
            return this.balance * this.interestRate;
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
// Story
var account1 = new BankAccount(1, 40000, 0.01, 50000);
var account2 = new BankAccount(2, 100000, 0.01, 50000);
account1.addFavoriteAccount(account2);
account1.transferMoney(20000, account1.getFavoriteAccounts()[0]);
try {
    account1.widthdraw(25000);
}
catch (e) {
    console.log("The fund were unsufficient, widthdraw aborted");
}
console.log(account1.getMensualInterest());
console.log(account1.getBalance());
account1.removeAccountById(2);
console.log("Size of fav list ", account1.getFavoriteAccounts().length);
