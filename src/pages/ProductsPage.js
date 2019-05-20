import React from 'react';
import Products from '../components/ProductPage/Products';
import Hero from '../components/Hero';
import productBKG from '../images/productsBcg.jpeg';

const ProductsPage = () => {
    return (
        <>
        <Hero img={productBKG} />
        <Products />
        </>
    )
};

export default ProductsPage;