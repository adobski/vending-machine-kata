import { IVendor } from './abstraction/IVendor';

export class Vendor implements IVendor{
    constructor(){
        this.returnedCoins = [];
        this.display = 'INSERT COIN';
        this.totalCoinValue = 0.00;
    }
    
    returnedCoins: string[];
    totalCoinValue: number;
    display: string;

    insertCoin(coin: string): string{
        if(coin === 'nickle' || coin === 'dime' || coin === 'quarter')
        {
           this.setValue(coin);         
        }
        else
            this.returnedCoins.push(coin);
        
        return this.display;
    }

    private setValue(coin: string){
        let value;
        if(coin === 'nickle'){
            this.totalCoinValue += 0.05;
        }
        else if(coin === 'dime'){
            this.totalCoinValue += 0.10;
        }
        else
            this.totalCoinValue += 0.25

        this.display = '$' + this.totalCoinValue.toFixed(2);
    }
}