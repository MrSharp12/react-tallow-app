import React from 'react';
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import cartHero from '../images/cartHero.jpg';

const CartPage = () => {
    return (
        <>
            <Hero img={cartHero} />
            <CartSection />
        </>
    );
};

export default CartPage;