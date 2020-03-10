import { IVendor } from './abstraction/IVendor';
import { IProductManager } from './abstraction/IProductManager';
import { IMoneyManager } from './abstraction/IMoneyManager';
import { IProduct } from './abstraction/IProduct';
 
export class Vendor implements IVendor{
    private productManager: IProductManager;
    private moneyManager: IMoneyManager;
    totalCoinValue: number;
    returnedCoins: string[];
    private displayMessage: string;
    
    constructor(
        productManager: IProductManager,
        moneyManager: IMoneyManager        
    ){
        this.productManager = productManager;
        this.moneyManager = moneyManager;

        this.returnedCoins = [];
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
        
        if(coin === 'nickle' || coin === 'dime' || coin === 'quarter')
        {
            this.totalCoinValue = this.moneyManager.insertCoin(coin);       
        }
        else
            this.returnedCoins.push(coin);

              
        this.setDisplay('$' + this.totalCoinValue.toFixed(2));
    }
    
    select(product: IProduct, money: number){
        let dispenser = this.productManager.select(product, money);

        if (dispenser.length > 0)
            this.setDisplay("THANK YOU");
    }
}