import React from 'react';
import { ProductConsumer } from '../context';

const HomePage = () => {
    return (
        <>
            <ProductConsumer>
                {value => {
                    console.log(value);
                    return <h1>Hello from Homepage!</h1>;
                }}
            </ProductConsumer>
        </>
    );
};

export default HomePage;