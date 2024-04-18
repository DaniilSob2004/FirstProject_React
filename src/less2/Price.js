import React from 'react'

import PriceChild from './PriceChild'
import PriceChildClass from './PriceChildClass'

function Price() {
    return (
        <>
            <h2>Price component</h2>
            <PriceChild name="Daniil" />
            <PriceChildClass age="20" />
        </>
    )
}

export default Price
