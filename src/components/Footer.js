import { Component } from "react"


class Footer extends Component {
    render() {
        return (
           <footer>
            <div className="footer-details">
                <div className="footer-details-flowers-shop">
                    <div>
                        <section class="widget widget_block">
                            <h2 class="wp-heading">Flower Shop</h2>
                        </section>
                        <section class="widget-text">
                            <p>Welcome to the world of Florist, where flowers come to life with love and creativity. Discover our story, our passion for flowers, and our commitment to making every moment memorable.</p>
                        </section>
                    </div>
                    <div>
                        <section class="widget widget_block">
                            <h2 class="wp-heading">Links</h2>
                        </section>
                        <div class="menu-list">
                            <ul class="navigation-menu">
                                <li class="menu-item"><a href="#" aria-current="page" class="menu-link">Home</a></li>
                                <li class="menu-item"><a href="#" class="menu-link">About</a></li>
                                <li class="menu-item"><a href="#" class="menu-link">Shop</a></li>
                                <li class="menu-item"><a href="#" class="menu-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <section class="widget widget_block">
                            <h2 class="wp-heading">Contact Us</h2>
                        </section>
                        <section class="widget_block">
                            <ul class="wp-list">
                                <li>Address: 13 Fifth Avenue, New York 101660</li>
                                <li>Email:&nbsp;contact@info.com</li>
                                <li>Phone: +91 987 654 321</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="copyright-flower-shop">
                    <div class="ast-footer-copyright">
                        <p>Copyright © 2024 Flower Shop</p>
                    </div>
                    {/* <div class="footer-social-inner-wrap">
                        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <span class="ahfb-svg-iconset ast-inline-flex svg-baseline">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                                </svg>
                            </span>
                        </a>
                    </div> */}
                </div>
            </div>
           </footer>
        )
    }
}

export default Footer