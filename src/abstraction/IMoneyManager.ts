import { Coin } from '../';
import { IProduct } from './IProduct';

export interface IMoneyManager{
    insertCoin(coin: string): number;
    getReturnedCoins():string[];
    getInsertedCoins(): Coin[]
    getTotalCoinValue(): number;
    clear():void;
    refund():void;
    pay(product: IProduct, money: number): number;
}