import React from 'react'
    
const ProductList = (props) => {
    return (
        <div>
            <h2 className='mb-4'>List of Products</h2>
            {props.products.map( (product, i) =>
                <p key={i}>{i+1}. {product.title}, {product.price} - {product.description}</p>
            )}
        </div>
    )
}
    
export default ProductList;

