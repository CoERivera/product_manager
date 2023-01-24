import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div>
            <h2 className='mb-4'>List of Products</h2>
            {props.products.map((product, i) =>
                <p key={i}>{i + 1}. {product.title? <Link to={`/products/${product._id}`}>{product.title}</Link> : <Link to={`/products/${product._id}`}>Empty</Link>}, ${product.price} - {product.description}</p>
            )}
        </div>
    )
}

export default ProductList;

