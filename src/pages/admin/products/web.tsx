import React from 'react'
import Header from '../header'
import Cate from '../cate'
import List from '../list'
import { useEffect, useState } from 'react'
import { list, remove } from '../../../fontend/api/product'
import { ProductType } from '../../../fontend/types/Product'

type Props = {

}

const web = (props: Props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await list()
            // console.log(data);
            setProducts(data)
        }
        getProducts()
    }, [])

    const handleOnremove = async (product: ProductType) => {
        remove(product._id);
        // reRender
        const { data } = await list();
        setProducts(data);
        // console.log(products)
    }

    return (
        <div className="listadmin1">
            <List products={products} onRemove={handleOnremove} />
        </div>

    )
}

export default web