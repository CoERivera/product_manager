import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Product Info:</h1>
            <p>Title: {product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <span className='d-flex justify-content-end mt-5'>
                <Link to={`/products/${product._id}/edit`}>
                    <button className='btn btn-info' type="submit">Edit Product</button>
                </Link>
            </span>
        </div>
    )
}

export default Detail;

