import React, { useState } from 'react'
import { useStateValue } from '../Store/StateProvider';

function ProductCheckout({item}) {
    const [{basket}, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(item.quantity);
    const [customization, setCustomization] = useState(item.customization);
    

    const addToCart = () => {
         const product = {
           name: item.name,
           id: item.id,
           description: item.description,
           price: item.price,
           quantityType: item.quantity,
           quantity: quantity,
           itemType: item.itemType,
           itemSubType: item.itemSubType,
           customization: customization,
           imageUrl: item.imageUrl,
         };
        console.log("Product: " + item);

        dispatch({
          type: "ADD_TO_BASKET",
          item: item
        });

        console.log("Basket:" + basket );
    }

    const removeFromCart = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: item.id
        })
    }

    return (
      <div className="productContainer">
        <img className="productImage checkoutImage" src={item.imageUrl} />
        <div className="productInfoContainer">
          <h3>{item.name}</h3>
          {/* <h4>{item.description}</h4> */}
          <div className="product__order">
            <div className="product__customize">
              <textarea
                className="form__textarea product__textarea"
                value={customization}
                onChange={(e) => setCustomization(e.target.value)}
              />
            </div>
            <div className="product__orderInfo">
              <p>
                Price:{" "}
                <span>
                  ${item.price}{" "}
                  {/* {item.quantityType === "single" ? (
                    <span>{item.quantity}</span>
                  ) : (
                    <span>({item.quantity})</span>
                  )} */}
                </span>
              </p>
              <p>
                Quantity{" "}
                <span>
                  <span>
                    <i
                      class="fas fa-minus-circle product__add"
                      type="button"
                      onClick={() =>
                        setQuantity(quantity === 0 ? quantity : quantity - 1)
                      }
                    ></i>
                  </span>{" "}
                  {quantity}
                  <span>
                    {" "}
                    <i
                      class="fas fa-plus-circle product__add"
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                    ></i>
                  </span>
                </span>
              </p>
              {/* <br />
          <br /> */}
              <div className="product__checkout__buttons">
                <button
                  className="form__submit product__button"
                  onClick={addToCart}
                >
                  Update Basket
                </button>
               
                  <i className="fas fa-trash-alt product__button__delete" type="button" onClick={removeFromCart}></i>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductCheckout
