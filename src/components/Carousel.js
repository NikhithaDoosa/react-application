import { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import '../App.css'

class Carousel extends Component {
    render() {
        return (
            <div class="carousel-container">
                <div class="home-page">
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
                <div class="carousel-item1">
                    <div class="element-content-inner">
                        <div class="elementor-widget-wrapper">
                            <div class="elementor-widget-container">
                                <h6 class="elementor-heading-title">01</h6>
                            </div>
                            <div class="elementor-image-box-content">
                                <h4 class="elementor-image-box-title">Order Online</h4>
                                <p class="elementor-image-box-description">Share some details here. This is Flexible section where you can share anything you want.</p>
                            </div>
                        </div>
                        <div class="elementor-widget-wrapper">
                            <div class="elementor-widget-container">
                                <h6 class="elementor-heading-title">02</h6>
                            </div>
                            <div class="elementor-image-box-content">
                                <h4 class="elementor-image-box-title">Free Shipping</h4>
                                <p class="elementor-image-box-description">Share some details here. This is Flexible section where you can share anything you want.</p>
                            </div>
                        </div>
                        <div class="elementor-widget-wrapper">
                            <div class="elementor-widget-container">
                                <h6 class="elementor-heading-title">03</h6>
                            </div>
                            <div class="elementor-image-box-content">
                                <h4 class="elementor-image-box-title">More Freshness</h4>
                                <p class="elementor-image-box-description">Share some details here. This is Flexible section where you can share anything you want.</p>
                            </div>
                        </div>
                        <div class="elementor-widget-wrapper">
                            <div class="elementor-widget-container">
                                <h6 class="elementor-heading-title">04</h6>
                            </div>
                            <div class="elementor-image-box-content">
                                <h4 class="elementor-image-box-title">Safe Payment</h4>
                                <p class="elementor-image-box-description">Share some details here. This is Flexible section where you can share anything you want.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item2">ABOUT FLORIST</div>
                <div class="carousel-item3">NEW ARRIVAL</div>
                <div class="carousel-item4">SPECIAL OFFER</div>
            </div>
        )
    }
}

export default Carousel