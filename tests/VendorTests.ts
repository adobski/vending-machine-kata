import { expect } from 'chai';
import { Vendor } from '../src/Vendor';

describe('VendorTests', () => {
    it('displays INSERT COIN when no coins are inserted', () => {
        const vendor = new Vendor();
        expect(vendor.display).to.equal('INSERT COIN');
    });
});