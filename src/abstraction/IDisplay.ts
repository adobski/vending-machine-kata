import { IProduct } from './IProduct';

export interface IDisplay{
    get(): string;
    set(value: string);
    checkOrder(product: IProduct, money: number, totalCoinValue);
    
}