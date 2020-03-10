import { expect } from 'chai';
import { ProductManager } from '../src';
import { Cola } from '../src/products/Cola';
import { Chips } from '../src/products/Chips';

describe('ProductManagerTests', () => {
    it('dispenses the product', () => {
        const selectedProduct = new Cola();
        
        const productManager = new ProductManager();
        productManager.select(selectedProduct, 1.00)

        expect(productManager.dispenser[0]).to.be.instanceOf(Cola);  
        expect(productManager.dispenser[0]).not.to.be.instanceOf(Chips)      
    })
});