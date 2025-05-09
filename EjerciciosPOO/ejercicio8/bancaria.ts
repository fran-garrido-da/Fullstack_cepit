class Account {
    private accNumber:number
    private balance:number
    constructor(accnum:number,bal:number){
        this.accNumber = accnum;
        this.balance = bal;
    }
    public increment(inc:number):void{
        this.balance += inc;
    }
    public decrement(dec:number){
        if(this.balance >= dec){
            this.balance -= dec
        }
    }
    showBalance(){
        return this.balance
    }
}
const account = new Account(9814763900,200);
console.log( `Balance is ${account.showBalance()}`);
account.increment(1000);
console.log( `Balance is ${account.showBalance()}`);
account.decrement(1000);
console.log( `Balance is ${account.showBalance()}`);
account.decrement(201);
console.log( `Balance is ${account.showBalance()}`);
account.decrement(199);
console.log( `Balance is ${account.showBalance()}`);
account.decrement(200);
console.log( `Balance is ${account.showBalance()}`);
