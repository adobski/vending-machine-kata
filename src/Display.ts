import { IProduct } from './abstraction/IProduct';

export class Display{
    private displayMessage: string;

    constructor(){
        this.displayMessage = "INSERT COIN";
    }

    get(): string{
        return this.displayMessage;
    }

    set(value: string){
        this.displayMessage = value;
    }

    checkOrder(product: IProduct, money: number, totalCoinValue){
        if(money < product.price){
            this.set("PRICE - " + (product.price - totalCoinValue));
        }
    }
}