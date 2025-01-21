import { Component } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom"
import "../App.css";
import HomePage from "./HomePage";

class Carousel extends Component {
 constructor(props) {
  super(props)
 }
  render() {
    const data = this.props.detail
    return (
      <div class="carousel-container">
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
              { data.map((each) => {
                  return <li key={each.id}>
                  <div class="individual-products">
                  <Link to={'/' + each.id}><img
                      alt=""
                      width="300"
                      height="300"
                      src={each.image}
                      sizes="(max-width: 300px) 100vw, 300px"
                    ></img></Link>
                  </div>
                  <div class="woo-product-summary">
                    <span class="woo-product-category">{each.title}</span>
                    <a class="woo-loop-product__link" href="#">
                      <h2 class="woo-product__title">{each.description}</h2>
                    </a>
                    <span class="price">
                      <del aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              {each.currency}
                            </span>
                            {each.price}
                          </bdi>
                        </span>
                      </del>{" "}
                      <span class="screen-reader-text">
                        Original price was: {each.originalPrice}
                      </span>
                      <ins aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                             
                            </span>
                            {each.currentPrice}
                          </bdi>
                        </span>
                      </ins>
                      <span class="screen-reader-text">
                        Current price is: {each.currentPrice}
                      </span>
                    </span>
                  </div>
                </li>
                })
              }
              </ul>
            </div>
          </div>
        </div>
        <div class="carousel-item4">
          <div class="elementor4-content-inner">
            <div class="elementor4-widget-container">
              <img
                class="elementor4-image-box"
                alt=""
                width="584"
                height="584"
                src="special-offer-img.jpg"
                sizes="(max-width: 584px) 100vw, 584px"
              ></img>
            </div>
            <div class="elementor4-element-container">
              <div>
                <h6 class="elementor4-heading-title">SPECIAL OFFER</h6>
              </div>
              <div>
                <h2 class="elementor4-subheading-title">
                  Your Floral Journey Begins Here: Get 20% Off Your First Order!
                </h2>
              </div>
              <div class="elementor4-button-container">
                <a class="elementor4-button-link" href="#">
                  <span class="elementor4-button-wrapper">
                    <span class="elementor4-button-text">Shop Now</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item5">
          <div class="elementor5-content-inner">
            <div>
              <h6 class="elementor5-heading-title">
                BEST SELLING
              </h6>
            </div>
            <div class="elementor5-image-box-wrapper">
              <div class="elementor5-image-box-content">
                <h2 class="elementor5-image-box-title">
                  Blossom with the Best Our Top-Selling Flowers
                </h2>
                <p class="elementor5-image-box-description">
                  Share some details here. This is Flexible section where you
                  can share anything you want.
                </p>
              </div>
            </div>
            <div class="elementor5-widget-container">
              <ul class="products">
              { data.map((each) => {
                  return <li key={each.id}>
                  <div class="individual-products">
                    <img
                      alt=""
                      width="300"
                      height="300"
                      src={each.image}
                      sizes="(max-width: 300px) 100vw, 300px"
                    ></img>
                  </div>
                  <div class="woo-product-summary">
                    <span class="woo-product-category">{each.title}</span>
                    <a class="woo-loop-product__link" href="#">
                      <h2 class="woo-product__title">{each.description}</h2>
                    </a>
                    <span class="price">
                      <del aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              {each.currency}
                            </span>
                            {each.price}
                          </bdi>
                        </span>
                      </del>{" "}
                      <span class="screen-reader-text">
                        Original price was: {each.originalPrice}
                      </span>
                      <ins aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                             
                            </span>
                            {each.currentPrice}
                          </bdi>
                        </span>
                      </ins>
                      <span class="screen-reader-text">
                        Current price is: {each.currentPrice}
                      </span>
                    </span>
                  </div>
                </li>
                })
              }
              </ul>
            </div>
          </div>
        </div>
        <div class="carousel-item6">
          <div class="elementor6-content-inner">
            <div>
              <h6 class="elementor6-heading-title">TESTIMONAIL</h6>
            </div>
            <div>
              <div class="elementor6-image-box-content">
                <h2 class="elementor6-image-box-title">Hear From Our Happy Customers</h2>
                <p class="elementor6-image-box-description">Share some details here. This is Flexible section where you can share anything you want.</p>
              </div>
            </div>
            <div class="elementor6-widget-container">
              <div class="elementor6-container">
                  <div class="elementor-star-rating__wrapper">
                    <div class="elementor-star-rating" title="5/5" itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
                      <i class="elementor-star-full"></i>
                      <i class="elementor-star-full"></i>
                      <i class="elementor-star-full"></i>
                      <i class="elementor-star-full"></i>
                      <i class="elementor-star-full"></i> 
                      <span itemprop="ratingValue" class="elementor-screen-only">5/5</span>
                    </div> 
                  </div>
                  <div class="elementor6-testimonial-content">
                    I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.
                  </div>
                  <div class="elementor-testimonial-meta-inner">
                    <div class="elementor-testimonial-image">
                      <img loading="lazy" decoding="async" width="64" height="64" src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/testimonial-skip-01.jpg" class="elementor6-attachment-image" alt=""/> 
                    </div>
                    <div class="elementor-testimonial-details">
                      <div class="elementor-testimonial-name">Steve Smith </div>
                      <div class="elementor-testimonial-job">Wedding Planner</div>
                    </div>
                  </div>
              </div>
              <div class="elementor6-container">
                  <div class="elementor-star-rating__wrapper">
                      <div class="elementor-star-rating" title="5/5" itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i> 
                        <span itemprop="ratingValue" class="elementor-screen-only">5/5</span>
                      </div> 
                  </div>
                  <div class="elementor6-testimonial-content">
                    I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.
                  </div>
                  <div class="elementor-testimonial-meta-inner">
                    <div class="elementor-testimonial-image">
                      <img loading="lazy" decoding="async" width="48" height="49" src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/testimonial-skip-01-1.jpg" class="elementor6-attachment-image" alt=""/> 
                    </div>
                    <div class="elementor-testimonial-details">
                      <div class="elementor-testimonial-name">Wade Warren</div>
                      <div class="elementor-testimonial-job">Designer</div>
                    </div>
                  </div>
              </div>
              <div class="elementor6-container">
                  <div class="elementor-star-rating__wrapper">
                      <div class="elementor-star-rating" title="5/5" itemtype="http://schema.org/Rating" itemscope="" itemprop="reviewRating">
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i>
                        <i class="elementor-star-full"></i> 
                        <span itemprop="ratingValue" class="elementor-screen-only">5/5</span>
                      </div> 
                  </div>
                  <div class="elementor6-testimonial-content">
                    I recently used Florist for my daughter's wedding, and I couldn't have been happier with the results. The wedding florals were breathtaking, and the team went above and beyond to bring.
                  </div>
                  <div class="elementor-testimonial-meta-inner">
                    <div class="elementor-testimonial-image">
                      <img loading="lazy" decoding="async" width="48" height="49" src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/testimonial-skip-02-1.jpg" class="elementor6-attachment-image" alt="" /> 
                    </div>
                    <div class="elementor-testimonial-details">
                      <div class="elementor-testimonial-name">Mila Kunis</div>
                      <div class="elementor-testimonial-job">Business Owner</div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item7">
           <div class="elementor7-content-inner">
               <div class="elementor7-image-box">
                <img loading="lazy" decoding="async" width="584" height="664" src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/cta.jpg" class="attachment-full size-full wp-image-335" alt="" srcset="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/cta.jpg 584w, https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/cta-264x300.jpg 264w, https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/cta-400x455.jpg 400w" sizes="(max-width: 584px) 100vw, 584px" /> 
               </div>
               <div class="elementor7-element-container">
                  <div>
                    <h6 class="elementor7-heading-title">Call to action</h6> 
                  </div>
                  <div>
                    <h2 class="elementor7-subheading-title">Explore Our Exquisite Floral Collections &amp; Shop Now for the Perfect Blooms</h2> 
                  </div>
                  <div class="elementor7-button-container">
                    <a class="elementor7-button-link" href="#">
                      <span class="elementor7-button-wrapper">
                        <span class="elementor7-button-text">Shop Now</span>
                      </span>
                    </a>
                  </div>
               </div>
           </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
