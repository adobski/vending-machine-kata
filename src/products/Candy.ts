import { IProduct } from '../abstraction/IProduct';

export class Candy implements IProduct{
    name: string = 'Candy';
    price: number = 0.65;
}
