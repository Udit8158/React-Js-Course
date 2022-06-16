import React from "react";

function CartItem(props) {
  // const [productsInCart, setProductsInCart] = useState(
  //   JSON.parse(localStorage.getItem("productItems"))
  // );

  // getting cart products from localstorage
  // let productsInCart = JSON.parse(localStorage.getItem("productItems"));

  // If there is no item is cart the it should an empty array not null.
  // if (productsInCart === null) {
  //   setProductsInCart([]);
  // }

  // // Function to remove products form cart
  // const removeFromCart = (event) => {
  //   const targetItemName =
  //     event.target.parentElement.parentElement.children[0].innerText;
  //   // console.log(targetItemName, productsInCart);
  //   const filteredProducts = productsInCart.filter((product) => {
  //     return product.name !== targetItemName;
  //   });
  //   // localStorage.setItem("productItems", JSON.stringify(filteredProducts));
  //   setProductsInCart(filteredProducts)
  // };

  return (
    <>
      <div className="card">
        <img
          src={`${props.imgUrl}`}
          className="card-img-top"
          alt="..."
          style={{ maxWidth: "205px", maxHeight: "265px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div className="">
            <p>
              Price : <span>{props.price}</span>$
            </p>

            <p>
              Rating : <span>{props.rating}</span> by{" "}
              <span>{props.ratingCount}</span> customers
            </p>
            <button className="btn btn-danger" onClick={props.removeFromCart}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
