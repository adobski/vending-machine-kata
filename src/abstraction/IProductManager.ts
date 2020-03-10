import { IProduct } from './IProduct'; 

export interface IProductManager{
    select(product: IProduct, money: number): IProduct[];
    resetDispenser():void;    
}