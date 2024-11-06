import {
  CarOutlined,
  DashboardOutlined,
  FacebookFilled,
  FacebookOutlined,
  GiftOutlined,
  HeartFilled,
  InstagramFilled,
  MailOutlined,
  PhoneOutlined,
  ProductOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  TruckOutlined,
  TwitterOutlined,
  TwitterSquareFilled,
  UserOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import React from "react";

type MenuItem = Required<MenuProps>['items'][number];
const items: MenuItem[] = [
    {key: 'trang-chu', label: <Link href={"/user/home"}>Trang chủ</Link>},
    {key: 'ban-hang-tai-quay', label: <Link href={"/user/product"}>Sản phẩm</Link>}
];
const HeaderUser = () => {
  return (
    <header className="header_section ">
      <div className="header_top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header_top_inner d-flex justify-content-between align-items-center">
                <div className="header_contact_info">
                  <ul className="d-flex">
                    <li className="text-white">
                      {" "}
                      <PhoneOutlined />{" "}
                      <a href="tel:+05483716566">+054 8371 65 66</a>
                    </li>
                    <li className="text-white">
                      {" "}
                      <MailOutlined /> <a href="#">uthrstore@domain.com</a>
                    </li>
                  </ul>
                </div>
                <div className="free_shipping_text">
                  <p className="text-white">
                    <TruckOutlined /> Miễn phí giao hàng đơn từ 599k
                    <a href="#">Learn More</a>
                  </p>
                </div>
                <div className="header_top_sidebar d-flex align-items-center">
                  <div className="header_social d-flex">
                    <span>Follow us</span>
                    <ul className="d-flex">
                      <li>
                        <a href="#">
                          <TwitterSquareFilled />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <FacebookFilled />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <InstagramFilled />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <YoutubeFilled />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header_container d-flex justify-content-between align-items-center">
                <div className="canvas_open">
                  <a href="javascript:void(0)">
                    <i className="ion-navicon"></i>
                  </a>
                </div>
                <div className="header_logo">
                  <a className="sticky_none" href="index.html">
                    <img src="assets/img/logo/logo.png" alt="Đang tìm ảnh" />
                  </a>
                </div>
                {/* <!--main menu start--> */}
                <div className="main_menu d-none d-lg-block">
                  {/* <nav>
                    <ul className="d-flex">
                      <li>
                        <a className="active" href="/user/home">
                          Trang chủ
                        </a>{" "}
                      </li>
                      <li>
                        <a href="/user/product">shop</a>
                      </li>
                      <li>
                        <a href="product-details.html">product</a>
                      </li>
                      <li>
                        <a href="#">sale</a>
                      </li>
                      <li>
                        <a href="#">pages</a>
                        <ul className="sub_menu">
                          <li>
                            <a href="cart.html">Cart Pages</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout Pages</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">blog</a>
                        <ul className="sub_menu">
                          <li>
                            <a href="blog.html">Blog Pages</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">buy</a>
                      </li>
                    </ul>
                  </nav> */}
                  <Menu
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    items={items}
                    style={{ border: 0,backgroundColor: "transparent"}}
                  />
                </div>
                <div className="header_account">
                  <ul className="d-flex">
                    <li className="header_search">
                      <a href="#" className="text-black">
                        <SearchOutlined />
                      </a>
                    </li>
                    <li className="account_link">
                      <a href="#" className="text-black">
                        <UserOutlined />
                      </a>
                      <ul className="dropdown_account_link">
                        <li>
                          <a href="#">Tài khoản của tôi</a>
                        </li>
                        <li>
                          <a href="#">Đăng nhập</a>
                        </li>
                        <li>
                          <a href="#">Liên hệ</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="text-black">
                        <HeartFilled />
                      </a>{" "}
                      <span className="item_count">2</span>
                    </li>
                    <li className="shopping_cart">
                      <a href="#" className="text-black">
                        <ShoppingCartOutlined />
                      </a>
                      <span className="item_count">2</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- page search box --> */}
      <div className="page_search_box">
        <div className="search_close">
          <i className="ion-close-round"></i>
        </div>
        <form className="border-bottom" action="#">
          <input className="border-0" placeholder="Tìm kiếm..." type="text" />
          <button type="submit">
            <span className="icon-magnifier icons"></span>
          </button>
        </form>
      </div>
    </header>
  );
};

export default HeaderUser;
