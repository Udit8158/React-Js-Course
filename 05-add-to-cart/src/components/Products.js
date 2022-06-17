import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import Spinner from "./Spinner";

function Products(props) {
  // state variables
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isShowAlert, setShowAlert] = useState(false);
  const [productItems, setProductItems] = useState([]);

  // add to cart function

  const addToCartHandler = (event) => {
    // added product information
    const parentCard = event.target.parentElement.parentElement;
    const imgURL = parentCard.children[0].src;
    const productTitle = parentCard.children[1].children[0].innerText;
    const productDescription = parentCard.children[1].children[1].innerText;
    const productPrice =
      parentCard.children[1].children[2].children[0].children[0].innerText;

    const productRating =
      parentCard.children[1].children[2].children[1].children[0].innerText;
    const productRatingCount =
      parentCard.children[1].children[2].children[1].children[1].innerText;

    // Make an object with the information of the product
    const productsObj = {
      name: productTitle,
      price: productPrice,
      desc: productDescription,
      imgUrl: imgURL,
      rating: productRating,
      ratingCount: productRatingCount,
    };

    // setting productItems state with the information
    productItems.push(productsObj);

    setProductItems(productItems);

    setShowAlert(true);

    // remove alert
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  // It is only run on reload and set productItems state with the information of cart from local storage (if there was any.)
  useEffect(() => {
    document.title = props.pageTitle;
    const cartItems = window.localStorage.getItem("productItems");
    if (cartItems !== null) {
      setProductItems(JSON.parse(cartItems));
    }
  }, []);

  // whenever change the productItems state it save the cart inforamation in the loacal storage
  useEffect(() => {
    if (productItems.length !== 0) {
      window.localStorage.setItem("productItems", JSON.stringify(productItems));
    }
    fetchProducts();
  }, [productItems.length]);

  // Fetching function
  const fetchProducts = async () => {
    const url = `https://fakestoreapi.com/products${props.category}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    // console.log(parsedData);

    // set state varibles value
    setProducts(parsedData);
    setLoading(false);
  };
  // fetchProducts();

  return (
    <>
      {isShowAlert && (
        <div
          className="alert alert-success fixed-top"
          // style={{ marginTop: "80px" }}
          role="alert"
        >
          Product successfully added to your cart.
        </div>
      )}
      <div className="container">
        <h1 className="text-center mb-3" style={{ marginTop: "80px" }}>
          Our Products
        </h1>
        {isLoading && <Spinner />}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <ProductItem
                  title={product.title}
                  description={product.description}
                  imgUrl={product.image}
                  price={product.price}
                  rating={product.rating.rate}
                  ratingCount={product.rating.count}
                  addToCartHandler={addToCartHandler}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
