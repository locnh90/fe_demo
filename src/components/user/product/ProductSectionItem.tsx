import { FullscreenOutlined, HeartFilled, ReloadOutlined } from "@ant-design/icons";
import React from "react";


interface IProps{
 urlImg: string;

}
const ProductSectionItem = (props:IProps) => {
    const {urlImg} = props;
  return (
    <figure>
      <div className="product_thumb">
        <a href="product-details.html">
          <img
            
            src={urlImg}
            alt="consectetur"
          />
        </a>
        <div className="product_action">
          <ul>
            <li className="wishlist">
              <a
                href="#"
                data-tippy="Wishlist"
                data-tippy-inertia="true"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-placement="left"
              >
                <HeartFilled />
              </a>
            </li>

            <li className="quick_view">
              <a
                data-toggle="modal"
                data-target="#modal_box"
                data-tippy="Quick View"
                href="#"
                data-tippy-inertia="true"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-placement="left"
              >
               <FullscreenOutlined />
              </a>
            </li>

            <li className="compare">
              <a
                data-tippy="Compare"
                href="#"
                data-tippy-inertia="true"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-placement="left"
              >
                <ReloadOutlined />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <figcaption className="product_content text-center">
        <div className="product_ratting">
          <ul className="d-flex justify-content-center">
            <li>
              <a href="#">
                <i className="ion-android-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-android-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-android-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-android-star"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ion-android-star"></i>
              </a>
            </li>
            <li>
              <span>(4)</span>
            </li>
          </ul>
        </div>
        <h4 className="product_name">
          <a href="product-details.html">Basic Joggin Shorts</a>
        </h4>
        <div className="price_box">
          <span className="current_price">$26.00</span>
          <span className="old_price">$62.00</span>
        </div>
        <div className="add_to_cart">
          <a
            className="btn btn-primary"
            href="#"
            data-tippy="Add To Cart"
            data-tippy-inertia="true"
            data-tippy-delay="50"
            data-tippy-arrow="true"
            data-tippy-placement="top"
          >
            Add To Cart
          </a>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductSectionItem;
