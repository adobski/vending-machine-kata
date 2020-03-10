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
});