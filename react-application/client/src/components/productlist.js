import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from 'axios'

function Productlist(props) {

    var params = useParams();
    console.log("params", params.id)
    var productId = params.id
    var [productdetail,setproductdetail]=useState([])
    useEffect(() => {
        axios('/api/' + productId).then((res) => {
            const results = res.data
            setproductdetail(results)
            console.log("res", results)
        })
    }, [])
    return(
        <div className="productlist-product">
            <div className="product-alignment">
                <div>
                    <img alt="" src={productdetail.image} class="zoomImg" aria-hidden="true"></img>
                </div>
                <div className="summary-product">
                    <nav>
                        <Link to="/" className="text-link">Home</Link>
                        &nbsp;/&nbsp;
                        <Link to="/Flower" className="text-link">Flower</Link>
                        &nbsp;/&nbsp;{productdetail.description}
                    </nav>
                    <h1>{productdetail.description}</h1>
                    <p class="price">
                      <del aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                              {productdetail.currency}
                            </span>
                            {productdetail.price}
                          </bdi>
                        </span>
                      </del>{" "}
                      <span class="screen-reader-text">
                        Original price was: {productdetail.originalPrice}
                      </span>
                      <ins aria-hidden="true">
                        <span class="woocommerce-Price-amount amount">
                          <bdi>
                            <span class="woocommerce-Price-currencySymbol">
                             
                            </span>
                            {productdetail.currentPrice}
                          </bdi>
                        </span>
                      </ins>
                      <span class="screen-reader-text">
                        Current price is: {productdetail.currentPrice}
                      </span>
                    </p>
                    <span>& Free Shipping</span>
                    <div class="product-details-description">
	                    <p>Discover the essence of elegance with our exquisite flower bouquet. Each bloom in this carefully crafted arrangement is a testament to nature’s beauty, meticulously handpicked to create a symphony of colors and fragrances.</p>
                    </div>
                    <button className="single-add-to-cart-button">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Productlist