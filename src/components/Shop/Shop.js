import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  //state for shopping cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //event handler function
  const handleAddToCart = (products) => {
    console.log(products);
    const newCart = [...cart, products];
    setCart(newCart);
    console.log(cart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <div className="cart-info">
          <p>Selected item : {cart.length}</p>
          <p>Total Price : {}</p>
          <p>Total Shipping : {}</p>
          <p>Tax: </p>
          <h5>Grand Total: </h5>
          <div className="clear-cart">
            <button className="clear-btn">
              <p>Clear Cart</p>
              <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>
          </div>
          <div>
            <button className="review-btn">
              <p>Review Order</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
