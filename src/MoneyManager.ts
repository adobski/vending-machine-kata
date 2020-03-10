import { IMoneyManager } from './abstraction/IMoneyManager';

export class MoneyManager implements IMoneyManager{
    constructor(){
        this.totalCoinValue = 0.00;
    }
       
    private totalCoinValue: number;

    insertCoin(coin: string): number{
        this.setValue(coin);  

        return this.totalCoinValue;
    }

    private setValue(coin: string) {
        if(coin === 'nickle'){
            this.totalCoinValue += 0.05;
        }
        else if(coin === 'dime'){
            this.totalCoinValue += 0.10;
        }
        else
            this.totalCoinValue += 0.25
    }
}