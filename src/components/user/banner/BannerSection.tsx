import React from 'react'

const BannerSection = () => {
  return (
    <div className='mt-6'>

    <section className='banner_section mb-109'>
        <div className="container">
            <div className="section_title mb-60">
                <h2>featured collections</h2>
            </div>
            <div className="banner_container d-flex">
                <figure className="single_banner position-relative mr-30">
                    <img src="https://giaydabongtot.com/wp-content/uploads/2020/04/giay-da-bong-mau-hong-adidas-predator-spectral-mode.jpg"  alt=""/>
                    <figcaption className="banner_text position-absolute">
                        <h3>Zara Pattern <br /> backpacks</h3>
                        <p>Stretch, fresh-cool help you alway <br/> comfortable</p>
                        <a className="btn btn-primary mt-4" href="shop.html">Shop Now</a>
                    </figcaption>
                </figure>
                <figure className="single_banner position-relative mr-30">
                    <img src="https://giaydabongtot.com/wp-content/uploads/2020/04/giay-da-bong-mau-hong-adidas-predator-spectral-mode.jpg"  alt=""/>
                    <figcaption className="banner_text position-absolute">
                        <h3>Zara Pattern <br /> backpacks</h3>
                        <p>Stretch, fresh-cool help you alway <br/> comfortable</p>
                        <a className="btn btn-primary mt-4" href="shop.html">Shop Now</a>
                    </figcaption>
                </figure>
                {/* <figure className="single_banner position-relative">
                    <img src="https://giaydabongtot.com/wp-content/uploads/2020/10/Giay-da-bong-salah-adidas-x-ghosted-trang-vang-3.jpg"   alt="" />
                    <figcaption className="banner_text position-absolute">
                        <h3 className="text-white">Basic Color Caps</h3>
                        <p className="text-white">Minimalist never cool, choose and make <br/> the simple great again!</p>
                    </figcaption>
                </figure> */}
            </div>
        </div>
    </section>
    </div>
  )
}

export default BannerSection