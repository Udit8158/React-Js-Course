import React from "react";

function ProductItem(props) {
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
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={props.addToCartHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
