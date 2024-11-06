import React from 'react';
import { Carousel } from 'antd';    

const SlideArea = () => {
    
  return (
    <section className="slider_section mb-63">
      <Carousel autoplay autoplaySpeed={1000}>
        <div>
          <div
            className="single_slider d-flex align-items-center"
            style={{
              backgroundImage: "url('https://prosoccer.vn/wp-content/uploads/2020/04/Giay-da-bong-Adidas-Predator-20-FG-Mutator-pack-khong-day-9.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="slider_text">
                    <span>Lookbook</span>
                    <h1>Lựa chọn đỉnh cao – Bùng cháy đam mê!</h1>
                    <p>Chúng tôi yêu thích cách mà người mặc Aslam phối đồ với Norda</p>
                    <a className="btn btn-primary" href="shop.html">Khám phá ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide thứ hai */}
        <div>
          <div
            className="single_slider d-flex align-items-center"
            style={{
              backgroundImage: "url('https://prosoccer.vn/wp-content/uploads/2021/01/Giay-da-bong-adidas-chinh-hang-gia-re-nhat-tai-ha-noi.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-7">
                  <div className="slider_text">
                    <span>Lookbook</span>
                    <h1>Thể hiện đam mê, chinh phục mọi trận đấu.</h1>
                    <p>Chúng tôi yêu thích cách mà người mặc Aslam phối đồ với Norda</p>
                    <a className="btn btn-primary" href="shop.html">Khám phá ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
     </section>
  );
};

export default SlideArea;
