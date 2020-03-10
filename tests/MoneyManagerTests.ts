import { expect } from 'chai';
import { MoneyManager } from '../src';

describe('MoneyManagerTests', () => {
    it('should increase value when adding a coin', () =>{
        const moneyManager = new MoneyManager();

        let value = moneyManager.insertCoin('nickle');

        expect(value).to.equal(0.05);

        value = moneyManager.insertCoin('quarter');

        expect(value).to.equal(0.30);
    });

    it('should return total coin value',() => {
        const moneyManager = new MoneyManager();

        moneyManager.insertCoin('quarter');
        moneyManager.insertCoin('quarter');

        expect(moneyManager.getTotalCoinValue()).to.equal(0.50);

    });

    it('should hold retured coins', () => {
        const moneyManager = new MoneyManager();

        let value = moneyManager.insertCoin('pennie');

        expect(moneyManager.getReturnedCoins().length).to.equal(1);
    });

    it('should return coins if we choose not to buy', () => {
        const moneyManager = new MoneyManager();

        let value = moneyManager.insertCoin('quarter');
        value = moneyManager.insertCoin('quarter');

        expect(value).to.equal(0.50);

        moneyManager.refund();

        expect(moneyManager.getReturnedCoins().length).to.equal(2);
        expect(moneyManager.getInsertedCoins().length).to.equal(0);

        
    })
});