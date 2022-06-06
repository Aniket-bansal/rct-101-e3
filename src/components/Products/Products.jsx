import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product/Product";

const Products = () => {

  const[product , setProduct] = useState([]);
  useEffect(()=>{
    const fetchProducts = async ()=>{
      let r = await fetch("http://localhost:8080/products")
      let data = await r.json();
      setProduct(data);
      // console.log(data)
    };
    fetchProducts();
  },[])
  return <div>
    <div>
      {product.map((p)=>{
        <div>
          <Link to={`products/${p.id}`} >{p.name}</Link>
          {/* <h3>{p.description}</h3> */}
        </div>
      })}
    </div>
  </div>;
};

export default Products;
