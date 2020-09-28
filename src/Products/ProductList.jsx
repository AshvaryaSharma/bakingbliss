import React from 'react';
import {catalog } from "../Stub/Stub"
import Product from './Product';


function ProductList() {
    console.log("catalog: " + catalog[0].name)
    return (
      <div className="productList">
        <h2 className="section-heading">Our products</h2>
        <div className="productSection">
            {catalog.map((item) => {
                return(
                     <Product item={item} key={item.id}/>
                )
            })}
         {/* <Product item={catalog[0]} /> */}
         
        </div>
      </div>
    );
}

export default ProductList
