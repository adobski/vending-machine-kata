import { expect } from 'chai';
import { Vendor } from '../src/Vendor';

describe('VendorTests', () => {
    it('displays INSERT COIN when no coins are inserted', () => {
        const vendor = new Vendor();
        expect(vendor.display).to.equal('INSERT COIN');
    });

    it('displays the value of the coins inserted', () => {
        const vendor = new Vendor();
        vendor.insertCoin('nickle');
        expect(vendor.display).to.equal('$0.05');
        vendor.insertCoin('quarter');
        expect(vendor.display).to.equal('$0.30');
        vendor.insertCoin('dime')
        expect(vendor.display).to.equal('$0.40');
        vendor.insertCoin('dime')
        expect(vendor.display).to.equal('$0.50');
        vendor.insertCoin('quarter');
        expect(vendor.display).to.equal('$0.75');
        vendor.insertCoin('quarter');
        expect(vendor.display).to.equal('$1.00');
    });

    it('places rejected coins in the coin return', () => {
        const vendor = new Vendor();

        vendor.insertCoin('pennie');
        expect(vendor.returnedCoins.length).to.equal(1);

    });
});