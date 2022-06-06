import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  // Note: this id should come from api
   const[products,setProducts] = useState({});
   const{id} = useParams();
    
   useEffect(()=>{
     if(id){

       let a = fetch(`http://localhost:8080/products/${id}`)
       .then((r)=>r.json())

       .then((d)=> setProducts(d)
       )
     }

   },[id])
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>Product id: {id}
      <h3 data-cy="product-name">Name:{products.name}</h3>
      <h6 data-cy="product-description">description:{products.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
  );
};

export default Product;
