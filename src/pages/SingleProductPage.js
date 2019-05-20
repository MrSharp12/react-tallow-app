import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import singleProductBKG from '../images/singleProductBcg.jpeg';
import { ProductConsumer } from '../context';

const ProductsPage = () => {
    return (
        <>
            <Hero img={singleProductBKG} title="single product" />
            <ProductConsumer>
                {value => {
                    const { singleProduct, addToCart, loading } = value;
                    if (loading) {
                        console.log('hello from loading');
                        return <h1>product loading...</h1>
                    }
                    const { description, id, price, title, image } = singleProduct
                    return <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <img
                                        src={`../${image}`}
                                        alt="single product"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <h5 className="text-title mb-4">{title}</h5>
                                    <h5 className="text-main text-capitalize mb-4">Price: ${price}</h5>
                                    <p className="text-capitalize text-title mt-3">description</p>
                                    <p>{description}</p>
                                    <button
                                        type="button"
                                        className="main-link"
                                        style={{ margin: '0.75rem' }}
                                        onClick={() => addToCart(id)}>
                                        add to cart
                                    </button>
                                    <Link
                                        to='/products'
                                        className="main-link"
                                        style={{ margin: '0.75rem' }}>back to product</Link>
                                </div>
                            </div>
                        </div>
                    </section>
                }}
            </ProductConsumer>
        </>
    );
};

export default ProductsPage;