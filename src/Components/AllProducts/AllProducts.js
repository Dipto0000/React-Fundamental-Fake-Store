import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./AllProducts.css";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1>Allproduct</h1>
      <div className="row container">
        {products.map((pd) => (
          <SingleProduct
            key={pd.id}
            product={pd}
            setCartCount={props.setCartCount}
          ></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
