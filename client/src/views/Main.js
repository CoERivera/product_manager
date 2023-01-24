import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(false);
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [loaded]);
    
    // eslint-disable-next-line
    const removeFromDom = id => {
        setProducts(products.filter(product => product._id !== id));
    }

    return (
        <div className='container mt-5'>
            <h1 className='mb-5'>Product Manager</h1>
            <ProductForm />
            <hr />
            {products && <ProductList products={products} />}
        </div>
    )
}

export default Main;
