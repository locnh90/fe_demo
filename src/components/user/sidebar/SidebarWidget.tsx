import React from 'react'

const SidebarWidget = () => {
  return (
    <aside className="sidebar_widget">
    <div className="widget_inner">
        <div className="widget_list widget_categories">
            <h2>Categories</h2>
            <ul>
                <li className="widget_sub_categories"><a href="javascript:void(0)" data-toggle="collapse" data-target="#men">Men</a>
                    <ul className="widget_dropdown_categories collapse show" id="men">
                        <li><a href="#"> New products <span>104</span></a></li>
                        <li><a href="#">Gymwear <span>68</span></a></li>
                        <li><a href="#">Jakets <span>75</span></a></li>
                        <li><a href="#">Jeans <span>30</span></a></li>
                        <li><a href="#">Shirts <span>150</span></a></li>
                        <li><a href="#">T-Shirts <span>113</span></a></li>
                        <li><a href="#">Accessories <span>95</span></a></li>
                    </ul>
                </li>
                <li className="widget_sub_categories"><a href="javascript:void(0)" data-toggle="collapse" data-target="#women">women</a>
                    <ul className="widget_dropdown_categories collapse" id="women">
                        <li><a href="#"> New products <span>104</span></a></li>
                        <li><a href="#">Gymwear <span>68</span></a></li>
                        <li><a href="#">Jakets <span>75</span></a></li>
                        <li><a href="#">Jeans <span>30</span></a></li>
                        <li><a href="#">Shirts <span>150</span></a></li>
                        <li><a href="#">T-Shirts <span>113</span></a></li>
                        <li><a href="#">Accessories <span>95</span></a></li>
                    </ul>
                </li>
                <li className="widget_sub_categories"><a href="javascript:void(0)" data-toggle="collapse" data-target="#footwear">footwear</a>
                    <ul className="widget_dropdown_categories collapse" id="footwear">
                        <li><a href="#"> New products <span>104</span></a></li>
                        <li><a href="#">Gymwear <span>68</span></a></li>
                        <li><a href="#">Jakets <span>75</span></a></li>
                        <li><a href="#">Jeans <span>30</span></a></li>
                        <li><a href="#">Shirts <span>150</span></a></li>
                        <li><a href="#">T-Shirts <span>113</span></a></li>
                        <li><a href="#">Accessories <span>95</span></a></li>
                    </ul>
                </li>
                <li className="widget_sub_categories"><a href="javascript:void(0)" data-toggle="collapse" data-target="#accessories">accessories</a>
                    <ul className="widget_dropdown_categories collapse" id="accessories">
                        <li><a href="#"> New products <span>104</span></a></li>
                        <li><a href="#">Gymwear <span>68</span></a></li>
                        <li><a href="#">Jakets <span>75</span></a></li>
                        <li><a href="#">Jeans <span>30</span></a></li>
                        <li><a href="#">Shirts <span>150</span></a></li>
                        <li><a href="#">T-Shirts <span>113</span></a></li>
                        <li><a href="#">Accessories <span>95</span></a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="widget_list widget_filter">
            <h2>Filter By</h2>
             <div className="filter__list slider_range">
                <h3>price</h3>
                <form action="#">
                    <div id="slider-range"></div>
                    <span>Range:</span>
                    <input type="text" name="text" id="amount" />

                </form>
             </div>

            <div className="filter__list widget_size">
                <h3> size</h3>
                <ul>
                    <li>
                        <a href="javascript:void(0)">S </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"> M</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">L</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)"> XL</a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">XLL</a>
                    </li>
                </ul>
            </div>
            <div className="filter__list widget_color">
                <h3>color</h3>
                 <ul>
                   <li>
                        <input type="checkbox" />
                        <span className="checkmark color1"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color2"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color3"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color4"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color5"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color6"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color7"></span>
                    </li>
                    <li>
                        <input type="checkbox" />
                        <span className="checkmark color8"></span>
                    </li>
                </ul>
            </div>
              <div className="filter__list widget_brands">
                <h3 data-toggle="collapse" data-target="#brands">brands</h3>
                <ul className="widget_dropdown_categories collapse show" id="brands">
                    <li><a href="#"> The North Face <span>104</span></a></li>
                    <li><a href="#">Zara Basic <span>68</span></a></li>
                    <li><a href="#">Moschino <span>75</span></a></li>
                    <li><a href="#">Supreme <span>30</span></a></li>
                    <li><a href="#">Ecko Unltd <span>150</span></a></li>
                </ul>
            </div>
        </div>
        <div className="widget_list">
            <h2>Recent Product</h2>
            <div className="recent_product">
                <div className="recent_product_list d-flex mb-25">
                    <div className="recent_thumb">
                        <a href="product-details.html"><img src="assets/img/product/product4.jpg" alt="" /></a>
                    </div>
                    <div className="recent_content">
                        <h4><a href="product-details.html">Barbour T-shirt <br /> International</a></h4>
                        <span>$32.00</span>
                    </div>
                </div>
                <div className="recent_product_list d-flex">
                    <div className="recent_thumb">
                        <a href="product-details.html"><img src="assets/img/product/product6.jpg" alt="" /></a>
                    </div>
                    <div className="recent_content">
                        <h4><a href="product-details.html">Barbour T-shirt <br /> International</a></h4>
                        <span>$32.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</aside>
  )
}

export default SidebarWidget