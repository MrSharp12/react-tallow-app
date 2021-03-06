import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Features from '../components/HomePage/Features';
import About from '../components/HomePage/About';

const HomePage = () => {
    return (
        <>
            <Hero title=""  max="true">
                <Link 
                to="/products"
                className="main-link"
                style={{ margin: "2rem", marginTop: "30rem"}}>
                Products</Link>
            </Hero>
            <Features></Features>
            <About></About>
        </>
    );
};

export default HomePage;