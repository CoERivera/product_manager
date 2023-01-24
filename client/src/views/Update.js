import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => {
                navigate('/products');
            })
            .catch(err => console.error(err));
    }

    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p className='form-group'>
                    <label className="font-weight-bold">Title</label><br />
                    <input className='form-control' name='title' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </p>
                <p className='form-group'>
                    <label className="font-weight-bold">Price</label><br />
                    <input className='form-control' name='price' type="number" min="1" step=".01" onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p className='form-group'>
                    <label className="font-weight-bold">Description</label><br />
                    <textarea className='form-control' rows="4" name='description' style={{ resize: "none" }} onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <span className='d-flex justify-content-end mt-5'><button className='btn btn-warning' type="submit">Update Product</button></span>
            </form>
        </div>
    )
}

export default Update;

