import React from 'react'
import { Link } from 'react-router-dom';

function ProductItem(props) {
    const { title, id, price } = props.product;
    return (
        <Link to={`/product/${id}`}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                margin: '30px',
                padding: '10px',
                border: '1px solid gray',
                cursor: 'pointer'
              }}
              >
                {id}. {title} - {price}
            </div>
        </Link>
    )
}

export default ProductItem
