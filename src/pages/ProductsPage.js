import React from 'react';
import Products from '../components/ProductPage/Products';
import Hero from '../components/Hero';
import productHero from '../images/productHero.jpg';

const ProductsPage = () => {
    return (
        <>
        <Hero img={productHero} />
        <Products />
        </>
    )
};

export default ProductsPage;