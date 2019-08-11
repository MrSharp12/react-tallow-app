import React from 'react';
import { ProductConsumer } from '../../context';

const CartTotals = () => {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    {value => {
                        const {clearCart, cartSubTotal, shipping, cartTotal} = value;
                        return <div className="col text-title text-center my-4">
                            <button 
                            className="btn btn-outline-danger text-capitalize mb-4" 
                            onClick={clearCart}
                            >
                                clear cart
                            </button>
                            <h3>Free shipping on orders over $59!</h3>
                            <br/>
                            <h3>Subtotal: ${cartSubTotal}</h3>
                            <h3>Shipping: ${shipping}</h3>
                            <h3>Total: ${cartTotal}</h3>
                        </div>
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
};

export default CartTotals;