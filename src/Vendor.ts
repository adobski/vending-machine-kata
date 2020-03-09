import { IVendor } from './abstraction/IVendor';

export class Vendor implements IVendor{
    constructor(){
        this.display = 'INSERT COIN';
    }
    
    display: string;
}