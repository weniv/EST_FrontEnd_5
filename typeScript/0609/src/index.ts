class BankAccount {
    private balance: number;
    private interestRate: number; // 이자율. 
    private interestCeiling: number // 이자 계산의 상한액.
    private favoriteAccounts: BankAccount[] = []; // 즐겨찾기 계좌 배열
    private id: number; // 계좌를 식별하기 위한 값

    constructor(id: number, balance: number, interestRate: number, interestCeiling: number) {
        this.id = id;
        this.balance = balance;
        this.interestRate = interestRate;
        this.interestCeiling = interestCeiling;
    }

    // 즐겨찾기에 계좌 추가
    addAccountToFavorite(account: BankAccount): void {
        this.favoriteAccounts.push(account);
    }

    // 즐겨찾기 목록 조회
    getFavoriteAccounts(): BankAccount[] {
        return this.favoriteAccounts;
    }

    // 즐겨찾기에서 계좌제거
    removeFavoriteAccount(id: number) {
        this.favoriteAccounts = this.favoriteAccounts.filter((account) => account.id !== id)
    }

    // 계좌간 송금 메서드
    transferMoney(amount: number, account: BankAccount) {
        this.withdraw(amount);
        account.deposite(amount);
    }

    // 이자 계산 메서드. 이자: this.balance * this.interestRate
    getInterest(): number {
        // 잔액이 싱한액보다 크다면 상한액 까지만 이자를 계산
        if (this.balance > this.interestCeiling) {
            return this.interestCeiling * this.interestRate
        }
        return this.balance * this.interestRate
    }

    // 입금 메서드
    deposite(amount: number): void {
        this.balance += amount;
    }

    // 출금 메서드
    withdraw(amount: number): void {

        if (this.balance < amount) {
            console.error('잔액이 부족합니다!!!');
            return;
        }

        this.balance -= amount;
    }

    //잔액 조회/ 계좌 조회 메서드
    getBalance(): number {
        return this.balance
    }
}

// const myAccount = new BankAccount(10000, 0.01, 100000);
// const yourAccount = new BankAccount(10000, 0.01, 100000);

// console.log(myAccount.getInterest());

// myAccount.transferMoney(1000, yourAccount);

// console.log(myAccount.getBalance());
// console.log(yourAccount.getBalance());

// myAccount.deposite(10000);
// myAccount.withdraw(30000);
// console.log(myAccount.getBalance());