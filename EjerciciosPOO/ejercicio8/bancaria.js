var Account = /** @class */ (function () {
    function Account(accnum, bal) {
        this.accNumber = accnum;
        this.balance = bal;
    }
    Account.prototype.increment = function (inc) {
        this.balance += inc;
    };
    Account.prototype.decrement = function (dec) {
        if (this.balance >= dec) {
            this.balance -= dec;
        }
    };
    Account.prototype.showBalance = function () {
        return this.balance;
    };
    return Account;
}());
var account = new Account(9814763900, 200);
console.log("Balance is ".concat(account.showBalance()));
account.increment(1000);
console.log("Balance is ".concat(account.showBalance()));
account.decrement(1000);
console.log("Balance is ".concat(account.showBalance()));
account.decrement(201);
console.log("Balance is ".concat(account.showBalance()));
account.decrement(199);
console.log("Balance is ".concat(account.showBalance()));
account.decrement(200);
console.log("Balance is ".concat(account.showBalance()));
