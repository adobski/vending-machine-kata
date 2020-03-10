import { IMoneyManager } from './abstraction/IMoneyManager';
import { Coin } from './'
import { IProduct } from './abstraction/IProduct';

export class MoneyManager implements IMoneyManager{
    constructor(){
        this.insertedCoins = [];
        this.returnedCoins = [];
    }

    private returnedCoins: string[];
    private insertedCoins: Coin[];

    insertCoin(coin: string): number{
        if(coin === 'nickle' || coin === 'dime' || coin === 'quarter')
        {
            this.addCoin(coin);     
        }
        else
            this.returnedCoins.push(coin);

        return this.getTotalCoinValue();
    }

    getReturnedCoins():string[]{
        return this.returnedCoins;
    }

    getInsertedCoins(): Coin[]{
        return this.insertedCoins;
    }

    refund(){
        this.insertedCoins.forEach((coin) => {
            this.returnedCoins.push(coin.name);
        });

        this.insertedCoins = [];
    }

    pay(product: IProduct, money: number): number{
        if(money === product.price){
            return 0;
        }
        else if(money > product.price){
            return money - product.price;
        }
        else
            return money - product.price;
    }

    clear(){
        this.insertedCoins = [];
    }

    getTotalCoinValue(): number{
        let coinValue = 0;
        this.insertedCoins.forEach((coin) => {
            coinValue += coin.value;
        })

        return coinValue;
    }
    
    private addCoin(coin: string) {
        if(coin === 'nickle'){
            this.insertedCoins.push(new Coin('nickle', 0.05));
        }
        else if(coin === 'dime'){
            this.insertedCoins.push(new Coin('dime', 0.10));
        }
        else
        this.insertedCoins.push(new Coin('quarter', 0.25));
    }
}