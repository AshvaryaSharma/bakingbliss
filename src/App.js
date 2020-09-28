import React from 'react';
import './Bliss.css';
import Header from "./Header/Header";
import HomePage from "./Home/HomePage";
import Footer from "./Footer/Footer";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import ContactUs from './Contact Us/ContactUs';
import GalleryPage from './Gallery/GalleryPage';
import ProductList from './Products/ProductList';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from './Checkout/Checkout';
import Login from './Login/Login';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const promise = loadStripe('pk_test_51HPvTsD5rnCFQJGPeVBMZyZar7ROrLg99Lb4jmUzIAL4Y3LPJ5nOqkc5A2a9XY7IHjaeFtW6WagV9yTR37GQ2YWF00yUyYvftL');

function App() {
  const path=window.location.href.split("/")[3];
  return (
    <Router>
      <div className="App">
        <Header path={path}/>
        <ToastContainer />
        <div className="container">
          <Switch>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Gallery">
              <GalleryPage />
            </Route>
            <Route path="/Products">
              <ProductList />
            </Route>
            <Route path="/Checkout">
              <Elements stripe={promise}>
                 <Checkout />
              </Elements>
             
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
