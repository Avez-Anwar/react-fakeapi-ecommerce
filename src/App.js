import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Content from "./Container/Content";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
