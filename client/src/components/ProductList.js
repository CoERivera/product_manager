import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const navigate = useNavigate();

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                navigate('/products');
                removeFromDom(id);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2 className='mb-4'>List of Products</h2>
            {props.products.map((product, i) =>
                <p key={i} className='d-flex justify-content-between'>
                    <span>{i + 1}. {product.title ? <Link to={`/products/${product._id}`}>{product.title}</Link> : <Link to={`/products/${product._id}`}>Empty</Link>}, ${product.price} - {product.description}
                    </span>
                    <button className='btn btn-danger btn-sm' onClick={(e) => { deleteProduct(product._id) }}>
                        Delete Product
                    </button>


                </p>
            )}
        </div>
    )
};

export default ProductList;

