import React, { useState } from "react";
import Cart from "../Cart/Cart";
import ReactReadMoreReadLess from "react-read-more-read-less";
import "./Content.css";
import Navbar from "../Navbar/NavBar";
import { useCart } from "react-use-cart";

function Content(props) {
  const { addItem } = useCart();
  return (
    <div className="container">
      <div className="main__image__content">
        <img src={props.posts.image} alt="img" />
        <h3>{props.posts.title}</h3>
        <button onClick={props.postButton}>$ {props.posts.price}</button>
        <button onClick={() => addItem(props.posts)}>Add to Cart</button>
        <div className="read__more__text">
          <ReactReadMoreReadLess
            charLimit={50}
            readMoreClassName="read-more-less--more"
            readLessClassName="read-more-less--less"
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {props.posts.description}
          </ReactReadMoreReadLess>
        </div>
      </div>
    </div>
  );
}

export default Content;
