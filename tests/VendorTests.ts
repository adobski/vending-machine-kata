import { expect } from 'chai';
import { Vendor, MoneyManager, ProductManager, Cola } from '../src';

describe('VendorTests', () => {
    it('displays INSERT COIN when no coins are inserted', () => {
        const vendor = new Vendor(
            new ProductManager(), 
            new MoneyManager());
        
        expect(vendor.getDisplay()).to.equal('INSERT COIN');
    });

    it('displays the value of the coins inserted', () => {
        const vendor = new Vendor(
            new ProductManager(), 
            new MoneyManager());

        vendor.insertCoin('nickle');
        expect(vendor.getDisplay()).to.equal('$0.05');
        vendor.insertCoin('quarter');
        expect(vendor.getDisplay()).to.equal('$0.30');
        vendor.insertCoin('dime')
        expect(vendor.getDisplay()).to.equal('$0.40');
        vendor.insertCoin('dime')
        expect(vendor.getDisplay()).to.equal('$0.50');
        vendor.insertCoin('quarter');
        expect(vendor.getDisplay()).to.equal('$0.75');
        vendor.insertCoin('quarter');
        expect(vendor.getDisplay()).to.equal('$1.00');
    });

    it('places rejected coins in the coin return', () => {
        const vendor = new Vendor(
            new ProductManager(), 
            new MoneyManager());

        vendor.insertCoin('pennie');
        expect(vendor.returnedCoins.length).to.equal(1);
        vendor.insertCoin('dime');
        vendor.insertCoin('pennie');
        expect(vendor.returnedCoins.length).to.equal(2);
    });

    it('dispenses the product when the button is pressed and the correct money has been inserted', () =>{
        const vendor = new Vendor(
            new ProductManager(), 
            new MoneyManager());

        expect(vendor.getDisplay()).to.equal('INSERT COIN');


        vendor.insertCoin('quarter');
        vendor.insertCoin('quarter');
        vendor.insertCoin('quarter');
        vendor.insertCoin('quarter');    
            
        vendor.select(new Cola(), vendor.totalCoinValue);

        expect(vendor.getDisplay()).to.equal('THANK YOU');

    })

    it('should display INSERT COIN after a purchase has been made after THANK YOU', () =>{
        const vendor = new Vendor(
            new ProductManager(), 
            new MoneyManager());

        vendor.insertCoin('quarter');
        vendor.insertCoin('quarter');
        vendor.insertCoin('quarter');
        vendor.insertCoin('quarter');    
            
        vendor.select(new Cola(), vendor.totalCoinValue);

        expect(vendor.getDisplay()).to.equal('THANK YOU');
        expect(vendor.getDisplay()).to.equal("INSERT COIN");    
    });
});