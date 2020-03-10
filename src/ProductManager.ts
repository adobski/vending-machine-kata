import { IProductManager } from './abstraction/IProductManager';
import { IProduct } from './abstraction/IProduct';


export class ProductManager implements IProductManager{
    constructor(){
        this.dispenser = [];
    }
    dispenser: IProduct[];

    select(product: IProduct, money: number): IProduct[]{
               
        if(money <= product.price){
            this.dispenser.push(product);
        }
        return this.dispenser;
    }
}