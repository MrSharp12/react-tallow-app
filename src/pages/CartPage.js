import React from 'react';
import CartSection from '../components/CartPage';
import Hero from '../components/Hero';
import cartHero from '../images/cartHero.jpg';

const CartPage = (props) => {
    return (
        <>
            <Hero img={cartHero} />
            <CartSection history={props.history} />
        </>
    );
};

export default CartPage;