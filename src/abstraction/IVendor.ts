export interface IVendor{
   
    returnedCoins: string[];
    totalCoinValue: number;
    display: string;
    
    insertCoin(coin: string): string;
}