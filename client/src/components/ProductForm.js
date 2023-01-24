import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p className='form-group'>
                <label class="font-weight-bold">Title</label><br />
                <input className='form-control' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>
            <p className='form-group'>
                <label class="font-weight-bold">Price</label><br />
                <input className='form-control' type="number" min="1" step=".01" onChange={(e) => setPrice(e.target.value)} value={price} />
            </p>
            <p className='form-group'>
                <label class="font-weight-bold">Description</label><br />
                <textarea className='form-control' rows="4" style={{ resize: "none" }}onChange={(e) => setDescription(e.target.value)} value={description} />
            </p>
            <span className='d-flex justify-content-end mt-5'><button className='btn btn-primary' type="submit">Create Product</button></span>
        </form>
    )
}

