import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';
import { items } from './ProductData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        singleProduct: {},
        loading: true
    };

    componentDidMount() {
        // TODO: data eventually will come from db
        this.setProducts(items);
    };

    setProducts = products => {
        let storeProducts = products.map(item => {
            const { id }  = item.sys;
            const product = { id, ...item.fields };
            return product;
        })
    };

    getStorageCart = () => {
        return [];
    };

    getStorageProduct = () => {
        return [];
    };

    getTotals = () => {

    };

    addTotals = () => {};

    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen })
    };

    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen })
    };

    closeCart = () => {
        this.setState({ cartOpen: false })
    };

    openCart = () => {
        this.setState({ cartOpen: true })
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    };
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };