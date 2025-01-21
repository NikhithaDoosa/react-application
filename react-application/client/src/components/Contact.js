import { Component } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

class Contact extends Component {
    render() {
        return (
            <div class="row-alignment">
              <div class="title">Flower Shop</div>
                  <ul className="categories-details">
                      <li className="menu">
                          <Link to="/">Home</Link>
                      </li>
                      <li className="menu">
                          <Link to="/about">About</Link>
                      </li>
                      <li className="menu">
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li className="menu">
                        <Link to="/contact">Contact</Link>
                      </li>
                  </ul>
                  <div class="cart-icon">
                      <FaShoppingCart />
                  </div>
            </div>
        )
    }
}

export default Contact