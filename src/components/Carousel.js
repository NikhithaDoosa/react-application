import { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

class Carousel extends Component {
  render() {
    return (
      <div class="carousel-container">
        <div class="home-page">
          <div class="row-alignment">
            <div class="title">Flower Shop</div>
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
        <div class="carousel-item1">
          <div class="element-content-inner">
            <div class="elementor-widget-wrapper">
              <div class="elementor-widget-container">
                <h6 class="elementor-heading-title">01</h6>
              </div>
              <div class="elementor-image-box-content">
                <h4 class="elementor-image-box-title">Order Online</h4>
                <p class="elementor-image-box-description">
                  Share some details here. This is Flexible section where you
                  can share anything you want.
                </p>
              </div>
            </div>
            <div class="elementor-widget-wrapper">
              <div class="elementor-widget-container">
                <h6 class="elementor-heading-title">02</h6>
              </div>
              <div class="elementor-image-box-content">
                <h4 class="elementor-image-box-title">Free Shipping</h4>
                <p class="elementor-image-box-description">
                  Share some details here. This is Flexible section where you
                  can share anything you want.
                </p>
              </div>
            </div>
            <div class="elementor-widget-wrapper">
              <div class="elementor-widget-container">
                <h6 class="elementor-heading-title">03</h6>
              </div>
              <div class="elementor-image-box-content">
                <h4 class="elementor-image-box-title">More Freshness</h4>
                <p class="elementor-image-box-description">
                  Share some details here. This is Flexible section where you
                  can share anything you want.
                </p>
              </div>
            </div>
            <div class="elementor-widget-wrapper">
              <div class="elementor-widget-container">
                <h6 class="elementor-heading-title">04</h6>
              </div>
              <div class="elementor-image-box-content">
                <h4 class="elementor-image-box-title">Safe Payment</h4>
                <p class="elementor-image-box-description">
                  Share some details here. This is Flexible section where you
                  can share anything you want.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item2">
          <div class="elementor2-content-inner">
            <div class="elementor2-widget-image-container">
              <div class="elementor2-image1">
                <img
                  alt=""
                  width="272"
                  height="424"
                  src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-01.jpg"
                  sizes="(max-width: 272px) 100vw, 272px"
                ></img>
              </div>
              <div class="elementor2-image1">
                <img
                  alt=""
                  width="334"
                  height="493"
                  src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-02.jpg"
                  sizes="(max-width: 334px) 100vw, 334px"
                ></img>
              </div>
            </div>
            <div class="elementor2-wrapper-container">
              <div>
                <h6 class="elementor2-widget-heading-title">ABOUT FLORIST</h6>
              </div>
              <div class="elementor2-image-box">
                <h2 class="elementor2-image-box-title">
                  Blossoming Your Special Moments with Nature's Finest
                </h2>
                <p class="elementor2-image-box-description">
                  Welcome to Florist, where floral artistry meets passion for
                  nature's beauty. Our story is rooted in a deep love for
                  flowers and a commitment to creating unforgettable moments for
                  our customers.
                </p>
              </div>
              <div class="elementor2-button-container">
                <a class="elementor2-button-wrapper" href="#">
                  <span class="elementor2-button-text">Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item3">
          <div class="elementor3-content-inner">
            <div>NEW ARRIVAL</div>
            <div>
              <h2 class="elemento3r-image-box-title">
                Discover the Latest Additions at Your Top Choice Flower Shop
              </h2>
              <p class="elementor3-image-box-description">
                Share some details here. This is Flexible section where you can
                share anything you want.
              </p>
            </div>
            <div class="elementor3-widget-container">
              <ul class="products">
                <li>
                  <div class="individual-products">
                    <img
                      alt=""
                      width="300"
                      height="300"
                      src="flower-product-1.jpg"
                      sizes="(max-width: 300px) 100vw, 300px"
                    ></img>
                  </div>
                  <div class="woo-product-summary">
                    <span class="woo-product-category">Flower </span>
                    <a href="#">
                      <h2 class="woo-product__title">Custom Floral Designs</h2>
                    </a>
                    <span class="price">
                      <del aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            127.00
                          </bdi>
                        </span>
                      </del>{" "}
                      <span class="screen-reader-text">
                        Original price was: $127.00.
                      </span>
                      <ins aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              $
                            </span>
                            86.00
                          </bdi>
                        </span>
                      </ins>
                      <span class="screen-reader-text">
                        Current price is: $86.00.
                      </span>
                    </span>
                  </div>
                </li>
                <li>
                  <img
                    alt=""
                    width="300"
                    height="300"
                    src="flower-product-2.jpg"
                    sizes="(max-width: 300px) 100vw, 300px"
                  ></img>
                </li>
                <li>
                  <img
                    alt=""
                    width="300"
                    height="300"
                    src="flower-product-3.jpg"
                    sizes="(max-width: 300px) 100vw, 300px"
                  ></img>
                </li>
                <li>
                  <img
                    alt=""
                    width="300"
                    height="300"
                    src="flower-product-4.jpg"
                    sizes="(max-width: 300px) 100vw, 300px"
                  ></img>
                </li>
                <li>
                  <img
                    alt=""
                    width="300"
                    height="300"
                    src="flower-product-5.jpg"
                    sizes="(max-width: 300px) 100vw, 300px"
                  ></img>
                </li>
                <li>
                  <img
                    alt=""
                    width="300"
                    height="300"
                    src="flower-product-6.jpg"
                    sizes="(max-width: 300px) 100vw, 300px"
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="carousel-item4">SPECIAL OFFER</div>
      </div>
    );
  }
}

export default Carousel;
