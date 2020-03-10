export interface IMoneyManager{
    insertCoin(coin: string): number;
    getReturnedCoins():string[];
}