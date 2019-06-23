import React from 'react';
import Hero from '../components/Hero';
import contactHero from '../images/contactHero.JPG';
import Contact from '../components/ContactPage/Contact';

const ContactPage = () => {
    return (
        <>
            <Hero img={contactHero}></Hero>
            <Contact />
        </>
    )
};

export default ContactPage;