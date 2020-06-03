import { Binary } from '@angular/compiler';

export interface Product {
    nameproduct : string;
    idProduct : number;
    price : number;
    image : Binary;
}
export interface ProductSource{
    source : Product
}