import { IProduct } from './IProduct'; 

export interface IVendor{
    setDisplay(value: string);
    getDisplay(): string;
    insertCoin(coin: string);
    select(product: IProduct, money: number);
    totalCoinValue: number;
    returnedCoins: string[];
    
}
    