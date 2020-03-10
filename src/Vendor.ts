import { IVendor } from './abstraction/IVendor';
import { IProductManager } from './abstraction/IProductManager';
import { IMoneyManager } from './abstraction/IMoneyManager';
import { IProduct } from './abstraction/IProduct';
 
export class Vendor implements IVendor{
    private productManager: IProductManager;
    private moneyManager: IMoneyManager;
    totalCoinValue: number;
    //getRreturnedCoins: string[];
    private displayMessage: string;
    
    constructor(
        productManager: IProductManager,
        moneyManager: IMoneyManager        
    ){
        this.productManager = productManager;
        this.moneyManager = moneyManager;

        //this.returnedCoins = [];
        this.totalCoinValue = 0.00;

        this.setDisplay('INSERT COIN');
    }

    setDisplay(value: string){
        this.displayMessage = value;
    }

    getDisplay(): string{
        return this.displayMessage;
    }

    insertCoin(coin: string){
        this.totalCoinValue = this.moneyManager.insertCoin(coin);
        this.setDisplay('$' + this.totalCoinValue.toFixed(2));
    }

    getReturnedCoins():string[]{
        return this.moneyManager.getReturnedCoins();
    }
    
    select(product: IProduct, money: number){
        let dispenser = this.productManager.select(product, money);
        
        this.checkOrder(product, money);

        if (dispenser.length > 0) {
            this.setDisplay("THANK YOU");
            this.totalCoinValue = 0;
        }
    }

    checkOrder(product: IProduct, money: number){
        if(money < product.price){
            this.setDisplay("PRICE - " + (product.price - this.totalCoinValue));
        }
    }

    resetDispenser(){
        this.productManager.resetDispenser();
        this.setDisplay("INSERT COIN");
    }
}