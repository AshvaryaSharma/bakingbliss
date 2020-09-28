import React, { useState } from 'react'
import { useStateValue } from '../Store/StateProvider';

function Product({item}) {
    const [{basket}, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);
    const [customization, setCustomization] = useState("");
    const [productAdded, setProductAdded] = useState(false);
    

    const addToCart = () => {

     if(productAdded && quantity === 0) {
       dispatch({
         type: "REMOVE_FROM_BASKET",
         id: item.id
       });
       setProductAdded(false);
     } else if (quantity > 0) {
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
        console.log("Product: " + product);

        dispatch({
          type: "ADD_TO_BASKET",
          item: product,
        });

        setProductAdded(true);
        console.log("Basket:" + basket);
     }
        
    }

    return (
      // <div className="productContainer">
      //   <img className="productImage" src={item.imageUrl} />
      //   <div className="productInfoContainer">
      //     <h3>{item.name}</h3>
      //     <h4>{item.description}</h4>
      //     <div className="product__order">
      //       <div className="product__customize">
      //         <textarea className="form__textarea product__textarea" value={customization} onChange={(e) => setCustomization(e.target.value)}/>
      //       </div>
      //       <div className="product__orderInfo">
      //         <p>
      //           Price:{" "}
      //           <span>
      //             ${item.price}{" "}
      //             {item.quantityType === "single" ? (
      //               <span>{item.quantity}</span>
      //             ) : (
      //               <span>({item.quantity})</span>
      //             )}
      //           </span>
      //         </p>
      //         <p>
      //           Quantity{" "}
      //           <span>
      //             <span >
      //               <i class="fas fa-minus-circle product__add" type="button" onClick={() => setQuantity((quantity===0)?quantity:quantity-1)}></i>
      //             </span>{" " }
      //             {quantity}
      //             <span >
      //                 {" "}
      //               <i class="fas fa-plus-circle product__add" type="button" onClick={() => setQuantity(quantity+1)}></i>
      //             </span>
      //           </span>
      //         </p>
      //         {/* <br />
      //     <br /> */}
      //         <button className="form__submit product__button" onClick={addToCart}>
      //           {!productAdded?"Add to Basket":"Update Basket"}
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <div className="productCardContainer">
        <div className="productCard__front">
          <img className="productCardImage" src={item.imageUrl} alt={item.name}/>
          <div className="productCardLabel">{item.name}</div>
        </div>
        <div className="productCard__back">
          <h3>
            {item.name}
          </h3>
          <h4>{item.description}</h4>
          <div className="product__customize">
               <textarea className="form__textarea productCard__textarea" value={customization} onChange={(e) => setCustomization(e.target.value)} placeholder="Make it your way!!"/>
          </div>
          <div className="product__orderInfo">
              <p>
                 Price:{" "}
                <span>
                   CAD {item.price}{" "}
                  {item.quantityType === "single" ? (
                    <span>{item.quantity}</span>
                  ) : (
                    <span>({item.quantity})</span>
                  )}
                </span>
              </p>
              <p>
                Quantity{" "}
                <span>
                  <span >
                    <i class="fas fa-minus-circle product__add" type="button" onClick={() => setQuantity((quantity===0)?quantity:quantity-1)}></i>
                  </span>{" " }
                  {quantity}
                  <span >
                      {" "}
                    <i class="fas fa-plus-circle product__add" type="button" onClick={() => setQuantity(quantity+1)}></i>
                  </span>
                </span>
              </p>
              {/* <br />
          <br /> */}
              <button className="form__submit product__button productCard__button" onClick={addToCart}>
                {!productAdded?"Add to Basket":"Update Basket"}
              </button>
            </div>
        </div>        
      </div>
    );
}

export default Product
