import React, { useEffect, useState } from "react";
import axios from "axios";
import Content from "../Container/Content";
import "./Header.css";
import Cart from "../Cart/Cart";
import Navbar from "../Navbar/NavBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

function Header(props) {
  const [loading, setLoading] = useState("true");
  const [post, setPost] = useState([]);
  const [error, setError] = useState("");
  const [increment, setIncrement] = useState(0);

  const handleClickTwo = () => {
    setIncrement(increment + 1);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(false);
        setPost(response.data);
        setError("");
        console.log(response.data);
      })
      .catch(() => {
        setLoading(false);
        setPost([]);
        setError("Something went wrong...");
      });
  }, []);

  const newPost = post.map((posts) => {
    return (
      <div>
        <Content posts={posts} postButton={handleClickTwo} />
      </div>
    );
  });

  return (
    <div>
      <Navbar increment={increment} />
      <div className="loading__content">
        {loading ? <LinearProgress color="secondary" /> : newPost}
        {error ? error : null}
      </div>
    </div>
  );
}

export default Header;
