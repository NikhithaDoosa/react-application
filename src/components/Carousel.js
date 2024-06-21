import { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import '../App.css'

class Carousel extends Component {
    render() {
        return (
            <div class="container">
                <div class="row-alignment">
                    <div class="title">
                        Flower Shop
                    </div>
                    <div>
                        <ul class="categories-details">
                            <li class="menu">Home</li>
                            <li class="menu">About</li>
                            <li class="menu">Shop</li>
                            <li class="menu">Contact</li>
                        </ul>
                    </div>
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
                        <h1 class="element-box-title">Let's Make Beautiful Flowers a Part of Your Life.</h1>
                        <p class="element-box-description">Explore a vibrant tapestry of blooms and arrangements that add color, fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion.</p>
                    </div>
                    <div>
                        <a class="element-button-wrapper" href="#">
                            <span class="element-button-text">
                                SHOP NOW
                            </span>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel