import { IMoneyManager } from './abstraction/IMoneyManager';

export class MoneyManager implements IMoneyManager{
    constructor(){
        this.totalCoinValue = 0.00;
        this.returnedCoins = [];
    }

    private returnedCoins: string[];
    private totalCoinValue: number;

    insertCoin(coin: string): number{
        if(coin === 'nickle' || coin === 'dime' || coin === 'quarter')
        {
            this.setValue(coin);     
        }
        else
            this.returnedCoins.push(coin);

        return this.totalCoinValue;
    }

    getReturnedCoins():string[]{
        return this.returnedCoins;
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