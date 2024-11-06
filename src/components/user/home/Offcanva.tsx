import React from "react";

const Offcanva = () => {
  return (
    <div>
      {/* // <!--offcanvas menu area start--> */}
      <div className="body_overlay"></div>
      <div className="offcanvas_menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="offcanvas_menu_wrapper">
                <div className="canvas_close">
                  <a href="javascript:void(0)">
                    <i className="ion-android-close"></i>
                  </a>
                </div>
                <div className="header_contact_info">
                  <ul className="d-flex">
                    <li className="text-white">
                      {" "}
                      <i className="icons icon-phone"></i>{" "}
                      <a href="tel:+05483716566">+054 8371 65 66</a>
                    </li>
                    <li className="text-white">
                      {" "}
                      <i className="icon-envelope-letter icons"></i>{" "}
                      <a href="#">uthrstore@domain.com</a>
                    </li>
                  </ul>
                </div>
                <div className="header_social d-flex">
                  <span>Follow us</span>
                  <ul className="d-flex">
                    <li>
                      <a href="#">
                        <i className="icon-social-twitter icons"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-social-facebook icons"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-social-instagram icons"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-social-youtube icons"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon-social-pinterest icons"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="language_currency">
                  <ul className="d-flex">
                    <li className="language">
                      <a href="#">
                        {" "}
                        Eng <i className="icon-right ion-ios-arrow-down"></i>
                      </a>
                      <ul className="dropdown_language">
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                        <li>
                          <a href="#">Russian</a>
                        </li>
                      </ul>
                    </li>
                    <li className="currency">
                      <a href="#">
                        {" "}
                        USd <i className="icon-right ion-ios-arrow-down"></i>
                      </a>
                      <ul className="dropdown_currency">
                        <li>
                          <a href="#">€ Euro</a>
                        </li>
                        <li>
                          <a href="#">£ Pound Sterling</a>
                        </li>
                        <li>
                          <a href="#">$ US Dollar</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li className="menu-item-has-children active">
                      <a href="#">Home</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="shop.html">Shop</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="product-details.html"> Product Details</a>
                    </li>
                    <li>
                      <a href="#">sale</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">pages </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="cart.html">cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">buy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </>!--offcanvas menu area end--> */}
      </div>
    </div>
  );
};

export default Offcanva;
