import { IVendor } from './abstraction/IVendor';
import { IProductManager } from './abstraction/IProductManager';
import { IMoneyManager } from './abstraction/IMoneyManager';
import { IProduct } from './abstraction/IProduct';
import { IDisplay } from './abstraction/IDisplay';
 
export class Vendor implements IVendor{
    private productManager: IProductManager;
    private moneyManager: IMoneyManager;
    display: IDisplay;
    
    //totalCoinValue: number;
    
    constructor(
        productManager: IProductManager,
        moneyManager: IMoneyManager,
        display: IDisplay       
    ){
        this.productManager = productManager;
        this.moneyManager = moneyManager;
        this.display = display;

        //this.totalCoinValue = 0.00;
    }

    insertCoin(coin: string){
        this.moneyManager.insertCoin(coin);
        this.display.set('$' + this.getTotalCoinValue().toFixed(2));
    }

    refund(){
        this.moneyManager.refund();
    }

    getReturnedCoins():string[]{
        return this.moneyManager.getReturnedCoins();
    }

    getTotalCoinValue():number{
        return this.moneyManager.getTotalCoinValue();
    }
    
    select(product: IProduct, money: number){
        let dispenser = this.productManager.select(product, money);

        this.moneyManager.pay(product, money);
        
        this.display.checkOrder(product, money, this.getTotalCoinValue());

        if (dispenser.length > 0) {
            this.display.set("THANK YOU");
            this.moneyManager.clear();
        }
    }

    resetDispenser(){
        this.productManager.resetDispenser();
        this.display.set("INSERT COIN");
    }
}