import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "../Navbar/NavBar";
import { useCart } from "react-use-cart";
import "./Cart.css";

function Cart(props) {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <div>
        <Navbar totalItems={totalItems} />
        <h1>Your Cart is Empty</h1>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar totalItems={totalItems} />
        <Router>
          <Switch>
            <Route path="/cart">
              <div>
                Cart:({totalUniqueItems}) total Items:({totalItems})
                <table className="container">
                  <tbody className="main__image__content main__image__tbody">
                    {items.map((item, index) => {
                      return (
                        <tr>
                          <td>
                            <img src={item.image} alt="" />
                          </td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>Quantity ({item.quantity})</td>
                          <td>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity - 1)
                              }
                            >
                              -
                            </button>
                            <button
                              onClick={() =>
                                updateItemQuantity(item.id, item.quantity + 1)
                              }
                            >
                              +
                            </button>
                            <button onClick={() => removeItem(item.id)}>
                              Remove Item
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <div>
                  <h2>Total Price: $ {cartTotal}</h2>
                </div>
                <div>
                  <button onClick={() => emptyCart()}>
                    Total Price: $ {cartTotal}
                  </button>
                  <button>Buy Now</button>
                </div>
              </div>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Cart;
