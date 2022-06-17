import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

function Cart() {
  // getting cart products from localstorage and store it on state
  const [productsInCart, setProductsInCart] = useState([]);
  let products = JSON.parse(localStorage.getItem("productItems"));
  useEffect(() => {
    document.title = "Monkey-Cart | My Cart";
    if (products !== null) {
      setProductsInCart(products);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productItems", JSON.stringify(productsInCart));
  }, [productsInCart.length]);

  // Function to remove products form cart
  const removeFromCart = (event) => {
    const targetItemName =
      event.target.parentElement.parentElement.children[0].innerText;
    // console.log(targetItemName, productsInCart);
    const filteredProducts = productsInCart.filter((product) => {
      return product.name !== targetItemName;
    });

    setProductsInCart(filteredProducts);
  };

  // State variable for total price
  const [toalPrice, setTotalPrice] = useState(0);

  const totalPriceArr = productsInCart.map((p) => {
    return Number(p.price);
  });
  const total = totalPriceArr.reduce(
    (prevVal, currentVal) => prevVal + currentVal,
    0
  );

  // setting total price on the mounting of the component
  useEffect(() => {
    setTotalPrice(total);
  }, [productsInCart.length]);

  return (
    <div className="container">
      <h1 className="mb-3 text-center" style={{ marginTop: "80px" }}>
        My Cart
      </h1>
      <h3 className="text-center">
        Total price : <span>{toalPrice}</span> $
      </h3>
      <div className="row container">
        {productsInCart &&
          productsInCart.map((product) => {
            return (
              <div className="col-md-4 my-3" key={Math.random()}>
                <CartItem
                  title={product.name}
                  description={product.desc}
                  imgUrl={product.imgUrl}
                  price={product.price}
                  rating={product.rating}
                  ratingCount={product.ratingCount}
                  removeFromCart={removeFromCart}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Cart;
