import { Component, useEffect, useState } from "react";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";
import Carousel from './Carousel';
import Footer from './Footer';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    }
  }

 async componentDidMount () {
   const response = await fetch('http://localhost:3000/api').then( res => {
      const results = res.json();
      return results
    })
    this.setState({
      details : response.details
    })
    console.log("state", this.state.details)
  }
    render() {
        return (
          <div>
          <div className="home-page">
            <div class="row-alignment">
              <div class="title">Flower Shop</div>
                  <ul className="categories-details">
                      <li className="menu">
                          <Link to="/" className="text-link">Home</Link>
                      </li>
                      <li className="menu">
                          <Link to="/about" className="text-link">About</Link>
                      </li>
                      <li className="menu">
                        <Link to="/shop" className="text-link">Shop</Link>
                      </li>
                      <li className="menu">
                        <Link to="/contact" className="text-link">Contact</Link>
                      </li>
                  </ul>
                  <div class="cart-icon">
                      <FaShoppingCart />
                  </div>
            </div>
            <div class="site-content">
                      <div class="s-con-inner">
                        <div>
                          <h6 class="heading-title">WELCOME TO FLORIST</h6>
                        </div>
                        <div class="e-img-content">
                          <h1 class="element-box-title">
                            Let's Make Beautiful Flowers a Part of Your Life.
                          </h1>
                          <p class="element-box-description">
                            Explore a vibrant tapestry of blooms and arrangements that add
                            color, fragrance, and elegance to your life. Discover the
                            perfect floral expression for every moment and occasion.
                          </p>
                        </div>
                        <div>
                          <a class="element-button-wrapper" href="#">
                            <span class="element-button-text">SHOP NOW</span>
                          </a>
                        </div>
                      </div>
            </div>
          </div>
          {/* { this.state.details.map(detail => <Carousel detail={detail} />)} */}
          <Carousel detail={this.state.details} />
          <Footer />
          </div>
        )
    }
}

export default HomePage