import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../logos/x.svg";
import { ReactComponent as MenuIcon } from "../logos/menu.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Cart from "../Cart/Cart";
import "./NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import WifiTetheringIcon from "@material-ui/icons/WifiTethering";
import Badge from "@material-ui/core/Badge";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="Nav-bar-home">
        <Link to="/" className="option option-bit" onClick={closeMobileMenu}>
          Home
        </Link>
        <Link to="/#" className="option option-bit" onClick={closeMobileMenu}>
          About
        </Link>
        <Link to="/#" className="option option-bit" onClick={closeMobileMenu}>
          Electronics
        </Link>
        <Link to="/#" className="option option-bit" onClick={closeMobileMenu}>
          Best Sellers
        </Link>
        <Link to="/#" className="option option-bit" onClick={closeMobileMenu}>
          Fasion
        </Link>
      </div>

      <Link to="/cart">
        <Badge badgeContent={props.totalItems} color="primary">
          <ShoppingCartIcon style={{ cursor: "pointer" }} />
        </Badge>
      </Link>
    </div>
  );
};

export default Navbar;
