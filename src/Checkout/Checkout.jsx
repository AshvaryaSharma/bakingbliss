import React from 'react'
import { useStateValue } from '../Store/StateProvider'
import ProductCheckout from './ProductCheckout';
import { Link } from 'react-router-dom';

import {CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement} from "@stripe/react-stripe-js";


function Checkout() {
//   const CardElementContainer = styled.div`
//   height: 40px;
//   display: flex;
//   align-items: center;
//   & .StripeElement {
//     width: 100%;
//     padding: 15px;
//   }
// `;
    const [{basket,user}, dispatch] = useStateValue();
    return (
      <div className="checkout__container">
        <h2 className="section-heading">Checkout</h2>
        
          {basket.length === 0 ? (
            <div className="checkout__emptyCart">
              <h3>Your bucket is empty. </h3>
              <br />
              <p>
                <Link to="/Products">Go and grab some cupcakes to bake!!!</Link>
              </p>
            </div>
          ) : (
            <div className="checkout__sections">
              <div className="checkout__productSection">
                <div className="checkout__address">
                  <div className="row">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form__input"
                    />
                  </div>
                  <div className="row">
                    <label>Phone number</label>
                    <input
                      type="number"
                      placeholder="tell us how to reach you"
                      className="form__input"
                    />
                  </div>
                  <div className="row">
                    <label>Address line 1</label>
                    <input
                      type="text"
                      placeholder="Address line 1"
                      className="form__input"
                    />
                  </div>
                  <div className="row">
                    <label>Address line 2</label>
                    <input
                      type="text"
                      placeholder="Address line 2"
                      className="form__input"
                    />
                  </div>
                  <div className="row">
                    <label>zip</label>
                    <input
                      type="text"
                      placeholder="zip"
                      className="form__input zipCode"
                    />
                  </div>
                </div>
                <div>
                  {basket.map((item) => {
                    return <ProductCheckout item={item} />;
                  })}
                </div>
              </div>
              <div className="checkout__address__payment">
                 <div className="checkout__cardnumber">
                  <CardNumberElement
                    options={{
                      iconStyle: "solid",
                      style: {
                        base: {
                          fontSize: '16px',
                          color: '#424770',
                          '::placeholder': {
                            color: '#aab7c4',
                            backgroundColor: '#fff',
                            // lineHeight: "40px",
                            // textAlign: "center"
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                 </div>
                    
                 
                  <CardExpiryElement />
                  <CardCvcElement />
                  {/* <PaymentRequestButtonElement /> */}
              </div>
            </div>
          )}
        
      </div>
    );
}
 
export default Checkout
