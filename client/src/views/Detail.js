import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const { removeFromDom } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    // eslint-disable-next-line
    }, []);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/products/' + id)
            .then(res => {
                navigate('/products');
                removeFromDom(id);
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Product Info:</h1>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <span className='d-flex justify-content-between mt-5'>
                <Link to={`/products/${product._id}/edit`}>
                    <button className='btn btn-info' type="submit">Edit Product</button>
                </Link>
                <button className='btn btn-danger' onClick={(e) => { deleteProduct(product._id) }}>
                    Delete Product
                </button>
            </span>
        </div>
    )
}

export default Detail;

