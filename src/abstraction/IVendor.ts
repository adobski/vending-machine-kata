import { IProduct } from './IProduct'; 
import { Display } from '../Display';
import { IDisplay } from './IDisplay';

export interface IVendor{
    display: IDisplay;
    insertCoin(coin: string);
    select(product: IProduct, money: number);
    resetDispenser();
    getTotalCoinValue(): number;
    getReturnedCoins():string[];
    refund();
}
    