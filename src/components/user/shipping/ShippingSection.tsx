import React from 'react'

const ShippingSection = () => {
  return (
    <section className="shipping_section mb-102">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="shipping_inner d-flex justify-content-between">
                    <div className="single_shipping d-flex align-items-center">
                        <div className="shipping_icon">
                            <i className="icon-cursor icons"></i>
                        </div>
                        <div className="shipping_text">
                            <h3>Free Shipping</h3>
                            <p>Orders over $100</p>
                        </div>
                    </div>
                    <div className="single_shipping d-flex align-items-center">
                        <div className="shipping_icon">
                            <i className="icon-reload icons"></i>
                        </div>
                        <div className="shipping_text">
                            <h3>Free Returns</h3>
                            <p>Within 30 days</p>
                        </div>
                    </div>
                    <div className="single_shipping d-flex align-items-center">
                        <div className="shipping_icon">
                            <i className="icon-lock icons"></i>
                        </div>
                        <div className="shipping_text">
                            <h3>100% Payment Secure</h3>
                            <p>Payment Online</p>
                        </div>
                    </div>
                    <div className="single_shipping d-flex align-items-center">
                        <div className="shipping_icon">
                            <i className="icon-tag icons"></i>
                        </div>
                        <div className="shipping_text">
                            <h3>Affordable Price</h3>
                            <p>Guaranteed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ShippingSection