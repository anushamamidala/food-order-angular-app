import { price } from "./price";

export interface Feed{
    storeName:string,
    name:string,
    description:string,
    price:price,
    images:string,
    _id:string
}