import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';

export default () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Product Form</h1>
            <ProductForm />
        </div>
    )
}

