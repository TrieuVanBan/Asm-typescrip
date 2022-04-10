import axios from "axios"
import { ProductType } from "../types/Product"
import instance from "./instance"

export const list = ()=> {
    const url = `products`
    return instance.get(url)
}
export const remove= (_id: number)=> {
    const url = `products/${_id}`
    return instance.delete(url)
}

export const add = (product: ProductType) => {
    const url = `/products`;
    return instance.post(url, product, {

    });
}