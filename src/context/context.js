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
        cartTotal: 0,
        // TODO: shipping: will be dependent on quantity
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
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields, image };
            return product;
        });
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false
        },
        () => {
            this.addTotals();
        }
        );
    };

    getStorageCart = () => {
        let cart;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        } else {
            cart = [];
        }
        return cart;
    };

    getStorageProduct = () => {
        return localStorage.getItem('singleProduct') ? JSON.parse(localStorage.getItem('singleProduct')) : {};
    };

    getTotals = () => {
        // TODO: will need shipping
        let subTotal = 0;
        let cartItems = 0;
        this.state.cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.count;
        })

        let total = parseFloat(subTotal.toFixed(2));
        // TODO: total = subTotal + shipping;
        return {
            cartItems,
            subTotal,
            total
        };
    };

    addTotals = () => { 
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTotal: totals.total
        })
    };

    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    };

    addToCart = (id) => {
        
        let tempCart = [...this.state.cart ];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);

        if (!tempItem) {
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = { ...tempItem, count: 1, total };
            tempCart = [...tempCart, cartItem];
        }
        else {
            tempItem.count++;
            tempItem.total = tempItem.price * tempItem.count;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(() => {
            return { cart: tempCart }
        }, 
        () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        })
    };

    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem('singleProduct', JSON.stringify(product));
        this.setState({
            singleProduct: {...product},
            loading: false
        });
    };

    handleSidebar = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    };

    handleCart = () => {
        this.setState({ cartOpen: !this.state.cartOpen });
    };

    closeCart = () => {
        this.setState({ cartOpen: false });
    };

    openCart = () => {
        this.setState({ cartOpen: true });
    };

    // cart functionality
    increment = (id) => {
        console.log(id);
    }

    decrement = (id) =>{
        console.log(id);
    }

    removeItem = (id) =>{
        console.log(id);
    }

    clearCart = () => {
        console.log('Cart Cleared');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct, 
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    };
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };