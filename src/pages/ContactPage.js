import React from 'react';
import Hero from '../components/Hero';
import contactIMG from '../images/contactBcg.jpeg';
import Contact from '../components/ContactPage/Contact';

const ContactPage = () => {
    return (
        <>
            <Hero img={contactIMG}></Hero>
            <Contact />
        </>
    )
};

export default ContactPage;