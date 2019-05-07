import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { FaHome }  from 'react-icons/fa';
//import styled from 'styled-components';

import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Default from './pages/DefaultPage';
import Home from './pages/HomePage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

import { Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return <>
  <NavBar />
  <Sidebar />
  <SideCart />
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/cart" component={Cart} />
    <Route path="/products" exact component={Products} />
    <Route path="/products/:id" component={SingleProduct} />
    <Route component={Default} />
  </Switch>
  <Footer />
  </>
}

export default App;
