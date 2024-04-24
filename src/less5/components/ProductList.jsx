import React from 'react'
import ProductItem from './ProductItem'
import { useProducts } from '../context/ProductContext'

function ProductList() {
    const products = useProducts();
    return (
        <section>
            <h2>ProductList</h2>
            {products.map(item => <ProductItem key={item.id} product={item}/>)}
        </section>
    )
}

export default ProductList
