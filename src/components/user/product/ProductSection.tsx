"use client";
import React from "react";
import { Row, Col, Card } from "antd";
import ProductSectionItem from "./ProductSectionItem";

const { Meta } = Card;

const ProductSection = () => {
  // Mảng sản phẩm mẫu
  const products = [
    {
      id: 1,
      name: "Sản phẩm 1",
      image:
        "https://aobongda24h.com/pic/news/images/images/6368893578007567493.jpg",
    },
    {
      id: 2,
      name: "Sản phẩm 2",
      image:
        "https://dothethao.net.vn/wp-content/uploads/2020/05/109948939_285590149442997_3370178284153384130_o.jpg",
    },
    {
      id: 3,
      name: "Sản phẩm 3",
      image: "https://cf.shopee.vn/file/487f29ef0e39c0f82086ca3d6c1d4b28",
    },
    {
      id: 4,
      name: "Sản phẩm 4",
      image:
        "https://assets.adidas.com/images/w_940,f_auto,q_auto/a3cad6b6a4fd497388fb48f2ca47ae73_9366/GZ0004_22_model.jpg",
    },
    // Thêm nhiều sản phẩm nữa nếu cần
  ];

  return (
    <section className="product_section mb-96">
      <div className="container">
        <div className="product_header d-flex justify-content-between  mb-50">
          <div className="section_title">
            <h2>best selling items</h2>
          </div>
          <div className="product_tab_btn d-flex">
            <ul className="nav" role="tablist">
              <li>
                <a
                  className="active"
                  data-toggle="tab"
                  href="#all"
                  role="tab"
                  aria-controls="all"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="#clothings"
                  role="tab"
                  aria-controls="clothings"
                  aria-selected="false"
                >
                  Clothings
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="#bags"
                  role="tab"
                  aria-controls="bags"
                  aria-selected="false"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="#shoes"
                  role="tab"
                  aria-controls="shoes"
                  aria-selected="false"
                >
                  Shoes
                </a>
              </li>
              <li>
                <a
                  data-toggle="tab"
                  href="#accessories"
                  role="tab"
                  aria-controls="accessories"
                  aria-selected="false"
                >
                  Accessories
                </a>
              </li>
            </ul>
            <div className="all_product">
              <a href="shop.html">All Product</a>
            </div>
          </div>
        </div>
        <div className="product_container row">
          <div className="tab-content">
            <div className="tab-pane fade show active" id="all" role="tabpanel">
              <div className="product_slick slick_slider_activation">
                <Row gutter={[16, 16]}>
                  {products.map((product) => (
                    <Col xs={24} sm={12} md={6} key={product.id}>
                      <article className="col single_product">
                        <ProductSectionItem urlImg={product.image} />
                      </article>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
