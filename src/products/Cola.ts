import { IProduct } from '../abstraction/IProduct'

export class Cola implements IProduct{
    name: string = "Cola";
    price: number = 1.00;
}