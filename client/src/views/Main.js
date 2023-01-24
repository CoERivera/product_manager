import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Product Manager</h1>
            <ProductForm />
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    )
}

export default Main;
