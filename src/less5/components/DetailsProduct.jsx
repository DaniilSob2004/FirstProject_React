import React from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'

function DetailsProduct() {
    const {id} = useParams();
    const products = useProducts();

    const prod = products.find((p) => p.id === Number(id));
    if (!prod) {
        return <div>Product not found</div>;
    }

    const { title, price } = prod;
    return (
        <h2>
            Product<br/>
            Title: {title}<br/>
            Price: {price}
        </h2>
    )
}

export default DetailsProduct
